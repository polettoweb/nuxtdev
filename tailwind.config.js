module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem'
      },
      borderWidth: {
        '14': '14px'
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)'
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)'
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)'
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d'
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },

      blue: {
        100: '#EBF8FF',
        200: '#BEE3F8',
        300: '#90CDF4',
        400: '#63B3ED',
        500: '#4299E1',
        600: '#3182CE',
        700: '#2B6CB0',
        800: '#2C5282',
        900: '#2A4365',
        1000: '#0d2438'
      }
    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.rotate-45': {
          transform: 'rotate(45deg)',
          width: '300%'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
