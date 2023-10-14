import terser from '@rollup/plugin-terser';

export default [
    {
        input: './node_modules/@angular/animations/fesm2022/animations.mjs',
        output: [
            {
                file: '${webjar.target}/dist/animations.umd.js',
                format: 'umd',
                name: 'ng.animations'
            },
            {
                file: '${webjar.target}/dist/animations.umd.min.js',
                format: 'umd',
                name: 'ng.animations',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/animations/fesm2022/browser.mjs',
        output: [
            {
                file: '${webjar.target}/dist/animations-browser.umd.js',
                format: 'umd',
                name: 'ng.animationsBrowser'
            },
            {
                file: '${webjar.target}/dist/animations-browser.umd.min.js',
                format: 'umd',
                name: 'ng.animationsBrowser',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/animations/fesm2022/browser/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/animations-browser-testing.umd.js',
                format: 'umd',
                name: 'ng.animationsBrowserTesting'
            },
            {
                file: '${webjar.target}/dist/animations-browser-testing.umd.min.js',
                format: 'umd',
                name: 'ng.animationsBrowserTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/common/fesm2022/common.mjs',
        output: [
            {
                file: '${webjar.target}/dist/common.umd.js',
                format: 'umd',
                name: 'ng.common'
            },
            {
                file: '${webjar.target}/dist/common.umd.min.js',
                format: 'umd',
                name: 'ng.common',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/common/fesm2022/http.mjs',
        output: [
            {
                file: '${webjar.target}/dist/common-http.umd.js',
                format: 'umd',
                name: 'ng.commonHttp'
            },
            {
                file: '${webjar.target}/dist/common-http.umd.min.js',
                format: 'umd',
                name: 'ng.commonHttp',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/common/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/common-testing.umd.js',
                format: 'umd',
                name: 'ng.commonTesting'
            },
            {
                file: '${webjar.target}/dist/common-testing.umd.min.js',
                format: 'umd',
                name: 'ng.commonTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/common/fesm2022/upgrade.mjs',
        output: [
            {
                file: '${webjar.target}/dist/common-upgrade.umd.js',
                format: 'umd',
                name: 'ng.commonUpgrade'
            },
            {
                file: '${webjar.target}/dist/common-upgrade.umd.min.js',
                format: 'umd',
                name: 'ng.commonUpgrade',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/common/fesm2022/http/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/common-http-testing.umd.js',
                format: 'umd',
                name: 'ng.commonHttpTesting'
            },
            {
                file: '${webjar.target}/dist/common-http-testing.umd.min.js',
                format: 'umd',
                name: 'ng.commonHttpTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/compiler/fesm2022/compiler.mjs',
        output: [
            {
                file: '${webjar.target}/dist/compiler.umd.js',
                format: 'umd',
                name: 'ng.compiler'
            },
            {
                file: '${webjar.target}/dist/compiler.umd.min.js',
                format: 'umd',
                name: 'ng.compiler',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/compiler/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/compiler-testing.umd.js',
                format: 'umd',
                name: 'ng.compilerTesting'
            },
            {
                file: '${webjar.target}/dist/compiler-testing.umd.min.js',
                format: 'umd',
                name: 'ng.compilerTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/core/fesm2022/core.mjs',
        output: [
            {
                file: '${webjar.target}/dist/core.umd.js',
                format: 'umd',
                name: 'ng.core'
            },
            {
                file: '${webjar.target}/dist/core.umd.min.js',
                format: 'umd',
                name: 'ng.core',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/core/fesm2022/rxjs-interop.mjs',
        output: [
            {
                file: '${webjar.target}/dist/core-rxjs-interop.umd.js',
                format: 'umd',
                name: 'ng.coreRxjsInterop'
            },
            {
                file: '${webjar.target}/dist/core-rxjs-interop.umd.min.js',
                format: 'umd',
                name: 'ng.coreRxjsInterop',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/core/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/core-testing.umd.js',
                format: 'umd',
                name: 'ng.coreTesting'
            },
            {
                file: '${webjar.target}/dist/core-testing.umd.min.js',
                format: 'umd',
                name: 'ng.coreTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/elements/fesm2022/elements.mjs',
        output: [
            {
                file: '${webjar.target}/dist/elements.umd.js',
                format: 'umd',
                name: 'ng.elements'
            },
            {
                file: '${webjar.target}/dist/elements.umd.min.js',
                format: 'umd',
                name: 'ng.elements',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/forms/fesm2022/forms.mjs',
        output: [
            {
                file: '${webjar.target}/dist/forms.umd.js',
                format: 'umd',
                name: 'ng.forms'
            },
            {
                file: '${webjar.target}/dist/forms.umd.min.js',
                format: 'umd',
                name: 'ng.forms',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/localize/fesm2022/localize.mjs',
        output: [
            {
                file: '${webjar.target}/dist/localize.umd.js',
                format: 'umd',
                name: 'ng.localize'
            },
            {
                file: '${webjar.target}/dist/localize.umd.min.js',
                format: 'umd',
                name: 'ng.localize',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/localize/fesm2022/init.mjs',
        output: [
            {
                file: '${webjar.target}/dist/localize-init.umd.js',
                format: 'umd',
                name: 'ng.localizeInit'
            },
            {
                file: '${webjar.target}/dist/localize-init.umd.min.js',
                format: 'umd',
                name: 'ng.localizeInit',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-browser.umd.js',
                format: 'umd',
                name: 'ng.platformBrowser'
            },
            {
                file: '${webjar.target}/dist/platform-browser.umd.min.js',
                format: 'umd',
                name: 'ng.platformBrowser',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-browser/fesm2022/animations.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-browser-animations.umd.js',
                format: 'umd',
                name: 'ng.platformBrowserAnimations'
            },
            {
                file: '${webjar.target}/dist/platform-browser-animations.umd.min.js',
                format: 'umd',
                name: 'ng.platformBrowserAnimations',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-browser/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-browser-testing.umd.js',
                format: 'umd',
                name: 'ng.platformBrowserTesting'
            },
            {
                file: '${webjar.target}/dist/platform-browser-testing.umd.min.js',
                format: 'umd',
                name: 'ng.platformBrowserTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-browser-dynamic.umd.js',
                format: 'umd',
                name: 'ng.platformBrowserDynamic'
            },
            {
                file: '${webjar.target}/dist/platform-browser-dynamic.umd.min.js',
                format: 'umd',
                name: 'ng.platformBrowserDynamic',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-browser-dynamic/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-browser-dynamic-testing.umd.js',
                format: 'umd',
                name: 'ng.platformBrowserDynamicTesting'
            },
            {
                file: '${webjar.target}/dist/platform-browser-dynamic-testing.umd.min.js',
                format: 'umd',
                name: 'ng.platformBrowserDynamicTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-server/fesm2022/platform-server.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-server.umd.js',
                format: 'umd',
                name: 'ng.platformServer'
            },
            {
                file: '${webjar.target}/dist/platform-server.umd.min.js',
                format: 'umd',
                name: 'ng.platformServer',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/platform-server/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/platform-server-testing.umd.js',
                format: 'umd',
                name: 'ng.platformServerTesting'
            },
            {
                file: '${webjar.target}/dist/platform-server-testing.umd.min.js',
                format: 'umd',
                name: 'ng.platformServerTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/router/fesm2022/router.mjs',
        output: [
            {
                file: '${webjar.target}/dist/router.umd.js',
                format: 'umd',
                name: 'ng.router'
            },
            {
                file: '${webjar.target}/dist/router.umd.min.js',
                format: 'umd',
                name: 'ng.router',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/router/fesm2022/testing.mjs',
        output: [
            {
                file: '${webjar.target}/dist/router-testing.umd.js',
                format: 'umd',
                name: 'ng.routerTesting'
            },
            {
                file: '${webjar.target}/dist/router-testing.umd.min.js',
                format: 'umd',
                name: 'ng.routerTesting',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/router/fesm2022/upgrade.mjs',
        output: [
            {
                file: '${webjar.target}/dist/router-upgrade.umd.js',
                format: 'umd',
                name: 'ng.routerUpgrade'
            },
            {
                file: '${webjar.target}/dist/router-upgrade.umd.min.js',
                format: 'umd',
                name: 'ng.routerUpgrade',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/service-worker/fesm2022/service-worker.mjs',
        output: [
            {
                file: '${webjar.target}/dist/service-worker.umd.js',
                format: 'umd',
                name: 'ng.serviceWorker'
            },
            {
                file: '${webjar.target}/dist/service-worker.umd.min.js',
                format: 'umd',
                name: 'ng.serviceWorker',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/service-worker/fesm2022/config.mjs',
        output: [
            {
                file: '${webjar.target}/dist/service-worker-config.umd.js',
                format: 'umd',
                name: 'ng.serviceWorkerConfig'
            },
            {
                file: '${webjar.target}/dist/service-worker-config.umd.min.js',
                format: 'umd',
                name: 'ng.serviceWorkerConfig',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/upgrade/fesm2022/upgrade.mjs',
        output: [
            {
                file: '${webjar.target}/dist/upgrade.umd.js',
                format: 'umd',
                name: 'ng.Upgrade'
            },
            {
                file: '${webjar.target}/dist/upgrade.umd.min.js',
                format: 'umd',
                name: 'ng.Upgrade',
                plugins: [terser()]
            }
        ]
    },
    {
        input: './node_modules/@angular/upgrade/fesm2022/static.mjs',
        output: [
            {
                file: '${webjar.target}/dist/upgrade-static.umd.js',
                format: 'umd',
                name: 'ng.UpgradeStatic'
            },
            {
                file: '${webjar.target}/dist/upgrade-static.umd.min.js',
                format: 'umd',
                name: 'ng.UpgradeStatic',
                plugins: [terser()]
            }
        ]
    }
];
