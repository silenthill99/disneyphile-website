import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PageController::index
 * @see app/Http/Controllers/PageController.php:15
 * @route '/page'
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
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/page/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PageController::create
 * @see app/Http/Controllers/PageController.php:23
 * @route '/page/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\PageController::store
 * @see app/Http/Controllers/PageController.php:31
 * @route '/page'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/page',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PageController::store
 * @see app/Http/Controllers/PageController.php:31
 * @route '/page'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::store
 * @see app/Http/Controllers/PageController.php:31
 * @route '/page'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PageController::store
 * @see app/Http/Controllers/PageController.php:31
 * @route '/page'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PageController::store
 * @see app/Http/Controllers/PageController.php:31
 * @route '/page'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
export const show = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/page/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
show.url = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { page: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.slug
                : args.page,
                }

    return show.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
show.get = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
show.head = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
    const showForm = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
        showForm.get = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PageController::show
 * @see app/Http/Controllers/PageController.php:39
 * @route '/page/{page}'
 */
        showForm.head = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
export const edit = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/page/{page}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
edit.url = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { page: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.slug
                : args.page,
                }

    return edit.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
edit.get = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
edit.head = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
    const editForm = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
        editForm.get = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PageController::edit
 * @see app/Http/Controllers/PageController.php:47
 * @route '/page/{page}/edit'
 */
        editForm.head = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
export const update = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/page/{page}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
update.url = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { page: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.slug
                : args.page,
                }

    return update.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
update.put = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
update.patch = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
    const updateForm = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
        updateForm.put = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PageController::update
 * @see app/Http/Controllers/PageController.php:55
 * @route '/page/{page}'
 */
        updateForm.patch = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PageController::destroy
 * @see app/Http/Controllers/PageController.php:63
 * @route '/page/{page}'
 */
export const destroy = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/page/{page}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PageController::destroy
 * @see app/Http/Controllers/PageController.php:63
 * @route '/page/{page}'
 */
destroy.url = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { page: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    page: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        page: typeof args.page === 'object'
                ? args.page.slug
                : args.page,
                }

    return destroy.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::destroy
 * @see app/Http/Controllers/PageController.php:63
 * @route '/page/{page}'
 */
destroy.delete = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PageController::destroy
 * @see app/Http/Controllers/PageController.php:63
 * @route '/page/{page}'
 */
    const destroyForm = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PageController::destroy
 * @see app/Http/Controllers/PageController.php:63
 * @route '/page/{page}'
 */
        destroyForm.delete = (args: { page: string | number | { slug: string | number } } | [page: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const page = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default page