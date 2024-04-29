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
        darkest : '#333333',
        dark : '#525252',
        DEFAULT : '#666666',
        light : '#AAAAAA',
        lightest : '#E9ECEF'
      }
    },
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

