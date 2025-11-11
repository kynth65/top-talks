import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TrialController::store
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/trial/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TrialController::store
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrialController::store
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TrialController::store
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TrialController::store
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const TrialController = { store }

export default TrialController