import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
 * @see routes/web.php:6
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:6
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:6
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:6
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:6
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
export const startTeaching = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: startTeaching.url(options),
    method: 'get',
})

startTeaching.definition = {
    methods: ["get","head"],
    url: '/start-teaching',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
startTeaching.url = (options?: RouteQueryOptions) => {
    return startTeaching.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
startTeaching.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: startTeaching.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
startTeaching.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: startTeaching.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
    const startTeachingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: startTeaching.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
        startTeachingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: startTeaching.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:10
 * @route '/start-teaching'
 */
        startTeachingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: startTeaching.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    startTeaching.form = startTeachingForm
/**
 * @see routes/web.php:14
 * @route '/student-services'
 */
export const studentServices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentServices.url(options),
    method: 'get',
})

studentServices.definition = {
    methods: ["get","head"],
    url: '/student-services',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:14
 * @route '/student-services'
 */
studentServices.url = (options?: RouteQueryOptions) => {
    return studentServices.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:14
 * @route '/student-services'
 */
studentServices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: studentServices.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:14
 * @route '/student-services'
 */
studentServices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: studentServices.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:14
 * @route '/student-services'
 */
    const studentServicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: studentServices.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:14
 * @route '/student-services'
 */
        studentServicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentServices.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:14
 * @route '/student-services'
 */
        studentServicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: studentServices.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    studentServices.form = studentServicesForm
/**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
export const startLearning = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: startLearning.url(options),
    method: 'get',
})

startLearning.definition = {
    methods: ["get","head"],
    url: '/start-learning',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
startLearning.url = (options?: RouteQueryOptions) => {
    return startLearning.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
startLearning.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: startLearning.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
startLearning.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: startLearning.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
    const startLearningForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: startLearning.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
        startLearningForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: startLearning.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:18
 * @route '/start-learning'
 */
        startLearningForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: startLearning.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    startLearning.form = startLearningForm
/**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
export const teachEnglish = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teachEnglish.url(options),
    method: 'get',
})

teachEnglish.definition = {
    methods: ["get","head"],
    url: '/teach-english',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
teachEnglish.url = (options?: RouteQueryOptions) => {
    return teachEnglish.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
teachEnglish.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teachEnglish.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
teachEnglish.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teachEnglish.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
    const teachEnglishForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: teachEnglish.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
        teachEnglishForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teachEnglish.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:22
 * @route '/teach-english'
 */
        teachEnglishForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teachEnglish.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    teachEnglish.form = teachEnglishForm
/**
 * @see routes/web.php:26
 * @route '/pricing'
 */
export const pricing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pricing.url(options),
    method: 'get',
})

pricing.definition = {
    methods: ["get","head"],
    url: '/pricing',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:26
 * @route '/pricing'
 */
pricing.url = (options?: RouteQueryOptions) => {
    return pricing.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:26
 * @route '/pricing'
 */
pricing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pricing.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:26
 * @route '/pricing'
 */
pricing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pricing.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:26
 * @route '/pricing'
 */
    const pricingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pricing.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:26
 * @route '/pricing'
 */
        pricingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pricing.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:26
 * @route '/pricing'
 */
        pricingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pricing.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pricing.form = pricingForm
/**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
export const freeTrial = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: freeTrial.url(options),
    method: 'get',
})

freeTrial.definition = {
    methods: ["get","head"],
    url: '/free-trial',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
freeTrial.url = (options?: RouteQueryOptions) => {
    return freeTrial.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
freeTrial.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: freeTrial.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
freeTrial.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: freeTrial.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
    const freeTrialForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: freeTrial.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
        freeTrialForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: freeTrial.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:30
 * @route '/free-trial'
 */
        freeTrialForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: freeTrial.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    freeTrial.form = freeTrialForm
/**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:37
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm