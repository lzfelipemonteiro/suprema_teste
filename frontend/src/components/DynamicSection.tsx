/* eslint-disable @typescript-eslint/no-explicit-any */
// components/DynamicSection.tsx
import { useState } from 'react';
import { useComponents } from '../hooks/useComponents';
import { Input } from './common/Input';

interface ComponentField {
  name: string;
  type: string;
  component?: string;
  required: boolean;
  items?: {
    structure: ComponentField[];
  };
  defaultProps?: any;
  value?: any;
}

interface Section {
  id: string;
  name: string;
  structure: ComponentField[];
}

interface DynamicSectionProps {
  section: Section;
  onChange: (data: Record<string, any>) => void;
  onRemove: (id: string) => void;
}

export const DynamicSection = ({ section, onChange, onRemove }: DynamicSectionProps) => {
  console.log('section:', section);
  const { components, loading } = useComponents();
  const [sectionData, setSectionData] = useState<Record<string, any>>({});

  if (loading) return <div>Carregando componentes...</div>;

  const handleComponentChange = (name: string, value: any) => {
    const newData = { ...sectionData, [name]: value };
    setSectionData(newData);
    onChange(newData);
  };

  const handleArrayItemChange = (
    componentName: string, 
    index: number, 
    fieldName: string, 
    value: any
  ) => {
    const arrayData = [...(sectionData[componentName] || [])];
    arrayData[index] = { ...arrayData[index], [fieldName]: value };
    handleComponentChange(componentName, arrayData);
  };

  const handleAddArrayItem = (componentName: string, defaultItem: any) => {
    const currentItems = sectionData[componentName] || [];
    const newItems = [...currentItems, { ...defaultItem }];
    handleComponentChange(componentName, newItems);
  };

  const handleRemoveArrayItem = (componentName: string, index: number) => {
    const currentItems = sectionData[componentName] || [];
    const newItems = currentItems.filter((_: any, i: number) => i !== index);
    handleComponentChange(componentName, newItems);
  };

  const renderComponent = (component: ComponentField) => {
    // Caso seja um array de componentes
    if (component.type === 'array' && component.items) {
      const currentValues = sectionData[component.name] || component.defaultProps || [];
      const defaultItem = component.defaultProps?.[0] || {};
      
      return (
        <div key={component.name} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">{component.name}</h3>
            <button
              onClick={() => handleAddArrayItem(component.name, defaultItem)}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              + Adicionar Item
            </button>
          </div>
          
          {currentValues.map((item: any, index: number) => (
            <div 
              key={`${component.name}-${index}`} 
              className="mb-4 p-4 border rounded relative"
            >
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleRemoveArrayItem(component.name, index)}
                  className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remover
                </button>
              </div>
              
              <div className="mt-6">
                {component.items?.structure.map((field: ComponentField) => {
                  const ComponentType = components[component.component || ''];
                  
                  if (!ComponentType) {
                    console.warn(`Componente ${component.component} não encontrado`);
                    return null;
                  }
    
                  return (
                    <Input
                      key={`${component.name}-${index}-${field.name}`}
                      label={field.name}
                      type={field.type}
                      required={field.required}
                      value={sectionData[component.name]?.[index]?.[field.name] ?? 
                            item[field.name] ?? ''}
                      onChange={(value: any) => 
                        handleArrayItemChange(component.name, index, field.name, value)
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Caso seja um componente básico
    const ComponentType = component.component ? components[component.component] : null;
    
    if (!ComponentType) {
      console.warn(`Componente ${component.component} não encontrado`);
      return null;
    }

    return (
      <Input
        key={component.name}
        label={component.name}
        type={ComponentType.structure.content[0].type}
        required={component.required}
        value={component.value ?? sectionData[component.name] ?? ''}
        onChange={(value: any) => handleComponentChange(component.name, value)}
      />
    );
  };

  return (
    <div className="w-full p-4 border rounded-lg mb-4">
      <div className='flex flex-row justify-between'>
        <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
        <button
          onClick={() => onRemove(section.id)}
          className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Remover
        </button>
      </div>
      <div className="space-y-4">
        {section.structure.map(renderComponent)}
      </div>
    </div>
  );
};