import Categories from '~/client/categories'
import Locations from '~/client/locations'
import Features from '~/client/features'
import Post from '~/client/post'
import Delete from '~/client/delete'

export default (context, inject) => {
    const factories = {
        categories: Categories(context.$axios),
        locations: Locations(context.$axios),
        features: Features(context.$axios),
        post: Post(context.$axios),
        delete:Delete(context.$axios)
    }

    inject('API', factories)
}