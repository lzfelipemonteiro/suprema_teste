export const SectionTypes = {
  menu: {
    id: "section-menu",
    name: "Menu de Navegação",
    slug: "menu",
    description: "Menu principal do site",
    structure: [
      {
        name: "logo",
        component: "image",
        required: false,
        defaultProps: {
          src: "",
          alt: "Logo"
        }
      },
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Menu Principal"
        }
      },
      {
        name: "links",
        type: "array",
        required: true,
        component: "link",
        items: {
          structure: [
            {
              name: "href",
              type: "text",
              required: true
            },
            {
              name: "text",
              type: "text",
              required: true
            }
          ]
        },
        defaultProps: [
          { href: "/", text: "Home" },
          { href: "/sobre", text: "Sobre" }
        ]
      }
    ],
    styleOptions: {
      background: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "1rem"
      }
    }
  },
  hero: {
    id: "section-hero",
    name: "Hero Section",
    slug: "hero",
    description: "Seção principal com destaque",
    structure: [
      {
        name: "mainTitle",
        component: "text",
        required: true,
        defaultProps: {
          value: "Título Principal"
        }
      },
      {
        name: "subtitle",
        component: "text",
        required: false,
        defaultProps: {
          value: "Subtítulo da seção"
        }
      },
      {
        name: "heroImage",
        component: "image",
        required: true,
        defaultProps: {
          src: "",
          alt: "Imagem principal"
        }
      },
      {
        name: "ctaButton",
        component: "link",
        required: true,
        defaultProps: {
          href: "#",
          text: "Saiba mais"
        }
      }
    ],
    styleOptions: {
      height: {
        type: "text",
        default: "100vh"
      },
      backgroundColor: {
        type: "color",
        default: "#F5F5F5"
      }
    }
  },
  bigNumbers: {
    id: "section-big-numbers",
    name: "Números Destacados",
    slug: "big-numbers",
    description: "Seção com números importantes em destaque",
    structure: [
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Nossos Números"
        }
      },
      {
        name: "numbers",
        type: "array",
        required: true,
        component: "number",
        items: {
          structure: [
            {
              name: "number",
              type: "text",
              required: true
            },
            {
              name: "title",
              type: "text",
              required: true
            },
            {
              name: "description",
              type: "text",
              required: true
            }
          ]
        },
        defaultProps: [
          {
            number: "100+",
            title: "Clientes",
            description: "Satisfeitos"
          }
        ]
      }
    ],
    styleOptions: {
      backgroundColor: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "2rem"
      }
    }
  },

  infoSideLeft: {
    id: "section-info-side-left",
    name: "Informações à Esquerda",
    slug: "info-left",
    description: "Seção com imagem à esquerda e texto à direita",
    structure: [
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Título da Seção"
        }
      },
      {
        name: "text",
        component: "text",
        required: true,
        defaultProps: {
          value: "Descrição da seção"
        }
      },
      {
        name: "image",
        component: "image",
        required: true,
        defaultProps: {
          src: "",
          alt: "Imagem"
        }
      }
    ],
    styleOptions: {
      backgroundColor: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "2rem"
      }
    }
  },

  infoSideRight: {
    id: "section-info-side-right",
    name: "Informações à Direita",
    slug: "info-right",
    description: "Seção com imagem à direita e texto à esquerda",
    structure: [
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Título da Seção"
        }
      },
      {
        name: "text",
        component: "text",
        required: true,
        defaultProps: {
          value: "Descrição da seção"
        }
      },
      {
        name: "image",
        component: "image",
        required: true,
        defaultProps: {
          src: "",
          alt: "Imagem"
        }
      }
    ],
    styleOptions: {
      backgroundColor: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "2rem"
      }
    }
  },
  bannerCards: {
    id: "section-banner-cards",
    name: "Cards em Banner",
    slug: "banner-cards",
    description: "Seção com cards informativos",
    structure: [
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Nossos Serviços"
        }
      },
      {
        name: "cards",
        type: "array",
        required: true,
        component: "card",
        items: {
          structure: [
            {
              name: "title",
              type: "text",
              required: true
            },
            {
              name: "text",
              type: "text",
              required: true
            },
            {
              name: "button",
              component: "link",
              required: true,
              defaultProps: {
                href: "/",
                text: "Ver mais"
              }
            }
          ]
        },
        defaultProps: [
          {
            title: "Título do Card",
            text: "Descrição do card",
            button: {
              href: "/",
              text: "Ver mais"
            }
          }
        ]
      }
    ],
    styleOptions: {
      backgroundColor: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "2rem"
      }
    }
  },
  newsLetter: {
    id: "section-newsletter",
    name: "Newsletter",
    slug: "newsletter",
    description: "Formulário para captura de emails",
    structure: [
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Newsletter"
        }
      },
      {
        name: "text",
        component: "text",
        required: true,
        defaultProps: {
          value: "Inscreva-se para receber novidades"
        }
      },
      {
        name: "input",
        component: "input",
        required: true,
        defaultProps: {
          placeholder: "Seu email",
          inputType: "email"
        }
      },
      {
        name: "button",
        component: "button",
        required: true,
        defaultProps: {
          label: "Inscrever",
          variant: "primary"
        }
      }
    ],
    styleOptions: {
      backgroundColor: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "2rem"
      }
    }
  },
  footer: {
    id: "section-footer",
    name: "Rodapé",
    slug: "footer",
    description: "Rodapé do site",
    structure: [
      {
        name: "logo",
        component: "image",
        required: false,
        defaultProps: {
          src: "",
          alt: "Logo"
        }
      },
      {
        name: "title",
        component: "text",
        required: true,
        defaultProps: {
          value: "Rodapé"
        }
      },
      {
        name: "links",
        type: "array",
        required: true,
        component: "link",
        items: {
          structure: [
            {
              name: "href",
              type: "text",
              required: true
            },
            {
              name: "text",
              type: "text",
              required: true
            }
          ]
        },
        defaultProps: [
          { href: "/", text: "Home" },
          { href: "/sobre", text: "Sobre" }
        ]
      }
    ],
    styleOptions: {
      background: {
        type: "color",
        default: "#FFFFFF"
      },
      padding: {
        type: "text",
        default: "1rem"
      }
    }
  },
};