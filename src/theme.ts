import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const librepassTheme: CustomThemeConfig = {
    name: 'librepass',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': 'var(--color-surface-900)',
        '--theme-font-color-dark': 'var(--color-surface-50)',
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
        // tertiary | #f5b573
        '--color-tertiary-50': '254 244 234', // #fef4ea
        '--color-tertiary-100': '253 240 227', // #fdf0e3
        '--color-tertiary-200': '253 237 220', // #fdeddc
        '--color-tertiary-300': '251 225 199', // #fbe1c7
        '--color-tertiary-400': '248 203 157', // #f8cb9d
        '--color-tertiary-500': '245 181 115', // #f5b573
        '--color-tertiary-600': '221 163 104', // #dda368
        '--color-tertiary-700': '184 136 86', // #b88856
        '--color-tertiary-800': '147 109 69', // #936d45
        '--color-tertiary-900': '120 89 56', // #785938
        // success | #2ec27e
        '--color-success-50': '224 246 236', // #e0f6ec
        '--color-success-100': '213 243 229', // #d5f3e5
        '--color-success-200': '203 240 223', // #cbf0df
        '--color-success-300': '171 231 203', // #abe7cb
        '--color-success-400': '109 212 165', // #6dd4a5
        '--color-success-500': '46 194 126', // #2ec27e
        '--color-success-600': '41 175 113', // #29af71
        '--color-success-700': '35 146 95', // #23925f
        '--color-success-800': '28 116 76', // #1c744c
        '--color-success-900': '23 95 62', // #175f3e
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
        // error | #ff5349
        '--color-error-50': '255 229 228', // #ffe5e4
        '--color-error-100': '255 221 219', // #ffdddb
        '--color-error-200': '255 212 210', // #ffd4d2
        '--color-error-300': '255 186 182', // #ffbab6
        '--color-error-400': '255 135 128', // #ff8780
        '--color-error-500': '255 83 73', // #ff5349
        '--color-error-600': '230 75 66', // #e64b42
        '--color-error-700': '191 62 55', // #bf3e37
        '--color-error-800': '153 50 44', // #99322c
        '--color-error-900': '125 41 36', // #7d2924
        // surface | #63535a
        '--color-surface-50': '232 229 230', // #e8e5e6
        '--color-surface-100': '224 221 222', // #e0ddde
        '--color-surface-200': '216 212 214', // #d8d4d6
        '--color-surface-300': '193 186 189', // #c1babd
        '--color-surface-400': '146 135 140', // #92878c
        '--color-surface-500': '99 83 90', // #63535a
        '--color-surface-600': '89 75 81', // #594b51
        '--color-surface-700': '74 62 68', // #4a3e44
        '--color-surface-800': '59 50 54', // #3b3236
        '--color-surface-900': '49 41 44' // #31292c
    }
};
