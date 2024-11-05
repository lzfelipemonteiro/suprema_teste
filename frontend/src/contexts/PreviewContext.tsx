import { createContext, useContext, useState, ReactNode } from 'react';

interface PreviewContextType {
  previewMode: boolean;
  togglePreviewMode: () => void;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const PreviewProvider = ({ children }: { children: ReactNode }) => {
  const [previewMode, setPreviewMode] = useState(false);

  const togglePreviewMode = () => setPreviewMode(!previewMode);

  return (
    <PreviewContext.Provider value={{ previewMode, togglePreviewMode }}>
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = () => {
  const context = useContext(PreviewContext);
  if (!context) throw new Error('usePreview must be used within PreviewProvider');
  return context;
};