import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ProfileController::image
 * @see app/Http/Controllers/Settings/ProfileController.php:53
 * @route '/settings/profile/image'
 */
export const image = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: image.url(options),
    method: 'patch',
})

image.definition = {
    methods: ["patch"],
    url: '/settings/profile/image',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\ProfileController::image
 * @see app/Http/Controllers/Settings/ProfileController.php:53
 * @route '/settings/profile/image'
 */
image.url = (options?: RouteQueryOptions) => {
    return image.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ProfileController::image
 * @see app/Http/Controllers/Settings/ProfileController.php:53
 * @route '/settings/profile/image'
 */
image.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: image.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Settings\ProfileController::image
 * @see app/Http/Controllers/Settings/ProfileController.php:53
 * @route '/settings/profile/image'
 */
    const imageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: image.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Settings\ProfileController::image
 * @see app/Http/Controllers/Settings/ProfileController.php:53
 * @route '/settings/profile/image'
 */
        imageForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: image.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    image.form = imageForm
const update = {
    image: Object.assign(image, image),
}

export default update