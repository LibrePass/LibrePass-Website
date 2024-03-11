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
        // primary | #ff8c5c
        '--color-primary-50': '255 238 231', // #ffeee7
        '--color-primary-100': '255 232 222', // #ffe8de
        '--color-primary-200': '255 226 214', // #ffe2d6
        '--color-primary-300': '255 209 190', // #ffd1be
        '--color-primary-400': '255 175 141', // #ffaf8d
        '--color-primary-500': '255 140 92', // #ff8c5c
        '--color-primary-600': '230 126 83', // #e67e53
        '--color-primary-700': '191 105 69', // #bf6945
        '--color-primary-800': '153 84 55', // #995437
        '--color-primary-900': '125 69 45', // #7d452d
        // secondary | #ffb68d
        '--color-secondary-50': '255 244 238', // #fff4ee
        '--color-secondary-100': '255 240 232', // #fff0e8
        '--color-secondary-200': '255 237 227', // #ffede3
        '--color-secondary-300': '255 226 209', // #ffe2d1
        '--color-secondary-400': '255 204 175', // #ffccaf
        '--color-secondary-500': '255 182 141', // #ffb68d
        '--color-secondary-600': '230 164 127', // #e6a47f
        '--color-secondary-700': '191 137 106', // #bf896a
        '--color-secondary-800': '153 109 85', // #996d55
        '--color-secondary-900': '125 89 69', // #7d5945
        // tertiary | #0EA5E9
        '--color-tertiary-50': '219 242 252', // #dbf2fc
        '--color-tertiary-100': '207 237 251', // #cfedfb
        '--color-tertiary-200': '195 233 250', // #c3e9fa
        '--color-tertiary-300': '159 219 246', // #9fdbf6
        '--color-tertiary-400': '86 192 240', // #56c0f0
        '--color-tertiary-500': '14 165 233', // #0EA5E9
        '--color-tertiary-600': '13 149 210', // #0d95d2
        '--color-tertiary-700': '11 124 175', // #0b7caf
        '--color-tertiary-800': '8 99 140', // #08638c
        '--color-tertiary-900': '7 81 114', // #075172
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
        // warning | #fbbd23
        '--color-warning-50': '254 245 222', // #fef5de
        '--color-warning-100': '254 242 211', // #fef2d3
        '--color-warning-200': '254 239 200', // #feefc8
        '--color-warning-300': '253 229 167', // #fde5a7
        '--color-warning-400': '252 209 101', // #fcd165
        '--color-warning-500': '251 189 35', // #fbbd23
        '--color-warning-600': '226 170 32', // #e2aa20
        '--color-warning-700': '188 142 26', // #bc8e1a
        '--color-warning-800': '151 113 21', // #977115
        '--color-warning-900': '123 93 17', // #7b5d11
        // error | #f87272
        '--color-error-50': '254 234 234', // #feeaea
        '--color-error-100': '254 227 227', // #fee3e3
        '--color-error-200': '253 220 220', // #fddcdc
        '--color-error-300': '252 199 199', // #fcc7c7
        '--color-error-400': '250 156 156', // #fa9c9c
        '--color-error-500': '248 114 114', // #f87272
        '--color-error-600': '223 103 103', // #df6767
        '--color-error-700': '186 86 86', // #ba5656
        '--color-error-800': '149 68 68', // #954444
        '--color-error-900': '122 56 56', // #7a3838
        // surface | #5e5c64
        '--color-surface-50': '231 231 232', // #e7e7e8
        '--color-surface-100': '223 222 224', // #dfdee0
        '--color-surface-200': '215 214 216', // #d7d6d8
        '--color-surface-300': '191 190 193', // #bfbec1
        '--color-surface-400': '142 141 147', // #8e8d93
        '--color-surface-500': '94 92 100', // #5e5c64
        '--color-surface-600': '85 83 90', // #55535a
        '--color-surface-700': '71 69 75', // #47454b
        '--color-surface-800': '56 55 60', // #38373c
        '--color-surface-900': '46 45 49' // #2e2d31
    }
};
