/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'blue': {
        darkest : '#597199',
        dark : '#6E8BBD',
        DEFAULT : '#88ACE9',
        light : '#BED3F8',
        lightest : '#E5F2FF'
      },

      'red': {
        darkest : '#5E2131',
        dark : '#782D41',
        DEFAULT : '#A95576',
        light : '#E5ABB5',
        lightest : '#F6EBED'
      },

      'brown': {
        darkest : '#98877B',
        dark : '#BCA698',
        DEFAULT : '#E8CDBC',
        light : '#F8E4D8',
        lightest : '#FFF0E8'
      },

      'tosca': {
        darkest : '#748B95',
        dark : '#8FACB8',
        DEFAULT : '#B1D4E3',
        light : '#CAE6F2',
        lightest : '#E3F4FB'
      },

      'pink': {
        darkest : '#D698D6',
        dark : '#EDB4ED',
        DEFAULT : '#EFBFEF',
        light : '#FFDAFF',
        lightest : '#FFEDFF'
      },

      'gray': {
        darkest : '#867F7F',
        dark : '#BBB6B6',
        DEFAULT : '#D0CBCB',
        light : '#E2DFDF',
        lightest : '#F0EFEF'
      }
    },
    extend: {
      rotate: {
        '30': '30deg',
      },
      spacing: {
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}

