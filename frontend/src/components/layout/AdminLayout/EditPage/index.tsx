/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/admin/EditPage/index.tsx
import { useState, useEffect } from 'react';
import { Button } from '../../../common/Button';
import { DynamicSection } from '../../../DynamicSection';
import { apiService } from '../../../../services/api';
import { useComponents } from '../../../../hooks/useComponents';

interface Section {
  id: string;
  name: string;
  slug: string;
  structure: any[];
  content?: Record<string, any>;
}

interface SectionOption {
  value: string;
  label: string;
}

export const EditPage = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [sectionList, setSectionList] = useState<Record<string, Section>>({});
  const [sectionsOptions, setSectionsOptions] = useState<SectionOption[]>([]);
  const [sectionsSelected, setSectionsSelected] = useState<Section[]>([]);
  const [currentSection, setCurrentSection] = useState<string>('');
  const { fetchComponents } = useComponents();

  useEffect(() => {
    fetchComponents();
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [sectionComponents] = await Promise.all([
        apiService.getSectionComponents(),
      ]);

      const listOptions = Object.values(sectionComponents as Record<string, Section>).map((section) => ({
        value: section.id,
        label: section.name,
      }));

      setSectionsOptions(listOptions);
      setSectionList(sectionComponents);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const handleAddSection = (id: string) => {
    console.log('Adicionando seção:', id);
    if (!id || id === '0') return;

    const selectedSection = Object.values(sectionList).find(
      (section) => section.id === id
    );

    if (selectedSection) {
      setSectionsSelected((prev) => [...prev, { ...selectedSection, content: {} }]);
      setCurrentSection('0');
    }
  };

  const handleSectionChange = (sectionId: string, data: Record<string, any>) => {
    setSectionsSelected((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, content: data } : section
      )
    );
  };

  const handleSave = async () => {
    try {
      const pageData = {
        title: pageTitle,
        sections: sectionsSelected.map((section) => ({
          id: section.id,
          content: section.content,
        })),
      };

      console.log(pageData);

      // await apiService.savePage(pageData);
      // Adicionar feedback de sucesso
    } catch (error) {
      console.error('Erro ao salvar página:', error);
      // Adicionar feedback de erro
    }
  };

  const handleRemoveSection = (sectionId: string) => {
    setSectionsSelected((prev) =>
      prev.filter((section) => section.id !== sectionId)
    );
  };

  return (
    <div className="flex flex-col w-full h-full p-4 text-white gap-4 relative">
      <h1 className="text-3xl">Edit Page Home</h1>

      <div className="flex flex-row gap-8">
        <input
          type="text"
          className="w-full bg-gray-500 p-2 rounded-md mt-4"
          placeholder="Page Title"
          value={pageTitle}
          onChange={(e) => setPageTitle(e.target.value)}
        />

        <div className="flex flex-row gap-2">
          <Button onClick={handleSave} className="bg-blue-500">
            Save
          </Button>
          <Button className="bg-green-500">Publish</Button>
          <Button className="bg-yellow-500">Preview</Button>
        </div>
      </div>

      <div className="w-full flex flex-col items-start border-2 border-gray-500 rounded-lg py-8 px-4">
        <div className="w-full sections mb-8">
          {sectionsSelected.map((section) => (
            <DynamicSection
              key={section.id}
              section={section}
              onChange={(data) => handleSectionChange(section.id, data)}
              onRemove={() => handleRemoveSection(section.id)}
            />
          ))}
        </div>

        <div className="w-full flex flex-row gap-4 items-center">
          <Button
            className="bg-blue-500 h-[40px]"
            onClick={() => handleAddSection(currentSection)}
          >
            Adicionar seção
          </Button>
          <select
            className="h-[40px] flex-1 text-black"
            value={currentSection}
            onChange={(e) => setCurrentSection(e.target.value)}
          >
            <option value="0">Selecione um componente</option>
            {sectionsOptions.map((section) => (
              <option key={section.value} value={section.value}>
                {section.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};