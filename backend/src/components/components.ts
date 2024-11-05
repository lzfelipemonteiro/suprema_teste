// Components.ts
export const ComponentTypes = {
  text: {
    id: "comp-text",
    name: "Campo de Texto",
    slug: "text",
    description: "Campo para entrada de texto simples",
    structure: {
      content: [
        {
          name: "value",
          type: "text",
          required: true,
          label: "Texto"
        }
      ],
      styleOptions: [
        {
          name: "Tamanho da fonte",
          type: "select",
          key: "fontSize",
          options: ["12px", "14px", "16px", "18px", "20px"],
          default: "16px"
        },
        {
          name: "Cor do texto",
          type: "color",
          key: "color",
          default: "#000000"
        }
      ]
    },
    defaultContent: {
      value: ""
    }
  },
  link: {
    id: "comp-link",
    name: "Link",
    slug: "link",
    description: "Link de navegação",
    structure: {
      content: [
        {
          name: "href",
          type: "text",
          required: true,
          label: "URL"
        },
        {
          name: "text",
          type: "text",
          required: true,
          label: "Texto do Link"
        }
      ],
      styleOptions: [
        {
          name: "Cor do link",
          type: "color",
          key: "color",
          default: "#0000FF"
        }
      ]
    },
    defaultContent: {
      href: "#",
      text: "Clique aqui"
    }
  },
  image: {
    id: "comp-image",
    name: "Imagem",
    slug: "image",
    description: "Componente de imagem",
    structure: {
      content: [
        {
          name: "src",
          type: "text",
          required: true,
          label: "URL da imagem"
        },
        {
          name: "alt",
          type: "text",
          required: true,
          label: "Texto alternativo"
        }
      ],
      styleOptions: [
        {
          name: "Largura",
          type: "text",
          key: "width",
          default: "100%"
        },
        {
          name: "Altura",
          type: "text",
          key: "height",
          default: "auto"
        }
      ]
    },
    defaultContent: {
      src: "",
      alt: ""
    }
  }
}