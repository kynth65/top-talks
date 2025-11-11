import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TrialController::submit
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/trial/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TrialController::submit
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrialController::submit
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TrialController::submit
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
    const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TrialController::submit
 * @see app/Http/Controllers/TrialController.php:15
 * @route '/api/trial/submit'
 */
        submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(options),
            method: 'post',
        })
    
    submit.form = submitForm
const trial = {
    submit: Object.assign(submit, submit),
}

export default trial