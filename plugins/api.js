import Categories from '~/client/categories'
import Locations from '~/client/locations'

export default (context, inject) => {
    const factories = {
        categories: Categories(context.$axios),
        locations: Locations(context.$axios)
    }

    inject('API', factories)
}