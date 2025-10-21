import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TagController::index
 * @see app/Http/Controllers/TagController.php:14
 * @route '/tags'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\TagController::store
 * @see app/Http/Controllers/TagController.php:22
 * @route '/tags'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TagController::store
 * @see app/Http/Controllers/TagController.php:22
 * @route '/tags'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::store
 * @see app/Http/Controllers/TagController.php:22
 * @route '/tags'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TagController::store
 * @see app/Http/Controllers/TagController.php:22
 * @route '/tags'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TagController::store
 * @see app/Http/Controllers/TagController.php:22
 * @route '/tags'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TagController::attach
 * @see app/Http/Controllers/TagController.php:56
 * @route '/tags/{user}/attach/{tag}'
 */
export const attach = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: attach.url(args, options),
    method: 'post',
})

attach.definition = {
    methods: ["post"],
    url: '/tags/{user}/attach/{tag}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TagController::attach
 * @see app/Http/Controllers/TagController.php:56
 * @route '/tags/{user}/attach/{tag}'
 */
attach.url = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                    tag: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.slug
                : args.user,
                                tag: typeof args.tag === 'object'
                ? args.tag.id
                : args.tag,
                }

    return attach.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::attach
 * @see app/Http/Controllers/TagController.php:56
 * @route '/tags/{user}/attach/{tag}'
 */
attach.post = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: attach.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TagController::attach
 * @see app/Http/Controllers/TagController.php:56
 * @route '/tags/{user}/attach/{tag}'
 */
    const attachForm = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: attach.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TagController::attach
 * @see app/Http/Controllers/TagController.php:56
 * @route '/tags/{user}/attach/{tag}'
 */
        attachForm.post = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: attach.url(args, options),
            method: 'post',
        })
    
    attach.form = attachForm
/**
* @see \App\Http\Controllers\TagController::detach
 * @see app/Http/Controllers/TagController.php:61
 * @route '/tags/{user}/detach/{tag}'
 */
export const detach = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: detach.url(args, options),
    method: 'post',
})

detach.definition = {
    methods: ["post"],
    url: '/tags/{user}/detach/{tag}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TagController::detach
 * @see app/Http/Controllers/TagController.php:61
 * @route '/tags/{user}/detach/{tag}'
 */
detach.url = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                    tag: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.slug
                : args.user,
                                tag: typeof args.tag === 'object'
                ? args.tag.id
                : args.tag,
                }

    return detach.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::detach
 * @see app/Http/Controllers/TagController.php:61
 * @route '/tags/{user}/detach/{tag}'
 */
detach.post = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: detach.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TagController::detach
 * @see app/Http/Controllers/TagController.php:61
 * @route '/tags/{user}/detach/{tag}'
 */
    const detachForm = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: detach.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TagController::detach
 * @see app/Http/Controllers/TagController.php:61
 * @route '/tags/{user}/detach/{tag}'
 */
        detachForm.post = (args: { user: string | number | { slug: string | number }, tag: string | number | { id: string | number } } | [user: string | number | { slug: string | number }, tag: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: detach.url(args, options),
            method: 'post',
        })
    
    detach.form = detachForm
const tags = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
attach: Object.assign(attach, attach),
detach: Object.assign(detach, detach),
}

export default tags