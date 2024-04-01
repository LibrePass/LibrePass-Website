import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const librepassTheme: CustomThemeConfig = {
    name: 'librepass',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': '0 0 0',
        '--theme-font-color-dark': '255 255 255',
        '--theme-rounded-base': '12px',
        '--theme-rounded-container': '8px',
        '--theme-border-base': '1px',
        // =~= Theme On-X Colors =~=
        '--on-primary': '0 0 0',
        '--on-secondary': '0 0 0',
        '--on-tertiary': '0 0 0',
        '--on-success': '0 0 0',
        '--on-warning': '0 0 0',
        '--on-error': '0 0 0',
        '--on-surface': '255 255 255',
        // =~= Theme Colors  =~=
        // primary | #ff7855
        '--color-primary-50': '255 235 230', // #ffebe6
        '--color-primary-100': '255 228 221', // #ffe4dd
        '--color-primary-200': '255 221 213', // #ffddd5
        '--color-primary-300': '255 201 187', // #ffc9bb
        '--color-primary-400': '255 161 136', // #ffa188
        '--color-primary-500': '255 120 85', // #ff7855
        '--color-primary-600': '230 108 77', // #e66c4d
        '--color-primary-700': '191 90 64', // #bf5a40
        '--color-primary-800': '153 72 51', // #994833
        '--color-primary-900': '125 59 42', // #7d3b2a
        // secondary | #f66111
        '--color-secondary-50': '254 231 219', // #fee7db
        '--color-secondary-100': '253 223 207', // #fddfcf
        '--color-secondary-200': '253 216 196', // #fdd8c4
        '--color-secondary-300': '251 192 160', // #fbc0a0
        '--color-secondary-400': '249 144 88', // #f99058
        '--color-secondary-500': '246 97 17', // #f66111
        '--color-secondary-600': '221 87 15', // #dd570f
        '--color-secondary-700': '185 73 13', // #b9490d
        '--color-secondary-800': '148 58 10', // #943a0a
        '--color-secondary-900': '121 48 8', // #793008
        // tertiary | #2ec27e
        '--color-tertiary-50': '224 246 236', // #e0f6ec
        '--color-tertiary-100': '213 243 229', // #d5f3e5
        '--color-tertiary-200': '203 240 223', // #cbf0df
        '--color-tertiary-300': '171 231 203', // #abe7cb
        '--color-tertiary-400': '109 212 165', // #6dd4a5
        '--color-tertiary-500': '46 194 126', // #2ec27e
        '--color-tertiary-600': '41 175 113', // #29af71
        '--color-tertiary-700': '35 146 95', // #23925f
        '--color-tertiary-800': '28 116 76', // #1c744c
        '--color-tertiary-900': '23 95 62', // #175f3e
        // success | #84cc16
        '--color-success-50': '237 247 220', // #edf7dc
        '--color-success-100': '230 245 208', // #e6f5d0
        '--color-success-200': '224 242 197', // #e0f2c5
        '--color-success-300': '206 235 162', // #ceeba2
        '--color-success-400': '169 219 92', // #a9db5c
        '--color-success-500': '132 204 22', // #84cc16
        '--color-success-600': '119 184 20', // #77b814
        '--color-success-700': '99 153 17', // #639911
        '--color-success-800': '79 122 13', // #4f7a0d
        '--color-success-900': '65 100 11', // #41640b
        // warning | #ffbe6f
        '--color-warning-50': '255 245 233', // #fff5e9
        '--color-warning-100': '255 242 226', // #fff2e2
        '--color-warning-200': '255 239 219', // #ffefdb
        '--color-warning-300': '255 229 197', // #ffe5c5
        '--color-warning-400': '255 210 154', // #ffd29a
        '--color-warning-500': '255 190 111', // #ffbe6f
        '--color-warning-600': '230 171 100', // #e6ab64
        '--color-warning-700': '191 143 83', // #bf8f53
        '--color-warning-800': '153 114 67', // #997243
        '--color-warning-900': '125 93 54', // #7d5d36
        // error | #f66151
        '--color-error-50': '254 231 229', // #fee7e5
        '--color-error-100': '253 223 220', // #fddfdc
        '--color-error-200': '253 216 212', // #fdd8d4
        '--color-error-300': '251 192 185', // #fbc0b9
        '--color-error-400': '249 144 133', // #f99085
        '--color-error-500': '246 97 81', // #f66151
        '--color-error-600': '221 87 73', // #dd5749
        '--color-error-700': '185 73 61', // #b9493d
        '--color-error-800': '148 58 49', // #943a31
        '--color-error-900': '121 48 40', // #793028
        // surface | #6e5c64
        '--color-surface-50': '233 231 232', // #e9e7e8
        '--color-surface-100': '226 222 224', // #e2dee0
        '--color-surface-200': '219 214 216', // #dbd6d8
        '--color-surface-300': '197 190 193', // #c5bec1
        '--color-surface-400': '154 141 147', // #9a8d93
        '--color-surface-500': '110 92 100', // #6e5c64
        '--color-surface-600': '99 83 90', // #63535a
        '--color-surface-700': '83 69 75', // #53454b
        '--color-surface-800': '66 55 60', // #42373c
        '--color-surface-900': '54 45 49' // #362d31
    }
};
