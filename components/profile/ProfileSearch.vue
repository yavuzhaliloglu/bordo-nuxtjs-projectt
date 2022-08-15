<template>
    <form class="dashboard-content-search d-flex flex-column align-items-between">

        <h3>Find Your Best House</h3>

        <div class="d-flex justify-content-between align-items-end">
            <div class="dashboard-content-search-group mr-5">
                <p class="dashboard-content-search-group-text">Lokasyon</p>
                <div class="dashboard-content-search-group-input">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <select name="" class="dashboard-content-search-group-input-select">
                        <option value="İstanbul">İstanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="İzmir">İzmir</option>
                        <option value="Bursa">Bursa</option>
                        <option value="Edirne">Edirne</option>
                        <option value="Edirne">Kahramanmaraş</option>
                    </select>
                </div>
            </div>

            <div class="dashboard-content-search-group mr-5 pr-5">
                <p class="dashboard-content-search-group-text">Lokasyon</p>
                <div class="dashboard-content-search-group-input">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <select name="" class="dashboard-content-search-group-input-select pr-5">
                        <option value="İstanbul">Satılık</option>
                        <option value="Ankara">kiralık</option>
                        <option value="İzmir">İşyeri</option>
                    </select>
                </div>
            </div>

            <div class="dashboard-content-search-group">
                <ButtonComponent :text="text" :type="type" />
            </div>

            <div class="dashboard-content-search-group">
                <button class="dashboard-content-search-group-filtericon">
                    <font-awesome-icon icon="fa-solid fa-filter" />
                </button>
            </div>
        </div>

    </form>
</template>

<script>
import ButtonComponent from '../links/ButtonComponent.vue';
export default {
    name: "ProfileSearch",
    components: { ButtonComponent },
    data() {
        return {
            text: 'Ara',
            type: 'submit'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>