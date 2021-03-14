<template>
    <section class="colleagues-page">
        <h1 class="colleagues-page__heading">
            The fellowship of the tretton37
        </h1>

        <section class="colleagues-page__toolbar container-fluid shadow-sm">
            <div class="row no-gutters">
                <div class="col-8">
                    <b-input-group>
                        <template #append>
                            <b-input-group-text>
                                <b-icon-search></b-icon-search>
                            </b-input-group-text>
                        </template>
                        <b-form-input
                            type="text"
                            placeholder="Filter grid/list"
                        ></b-form-input>
                    </b-input-group>
                </div>

                <div class="col d-flex justify-content-end">
                    <b-button-group>
                        <b-button variant="light" @click="layout = 'grid'">
                            <b-icon-grid-fill></b-icon-grid-fill>
                        </b-button>
                        <b-button variant="light" @click="layout = 'list'">
                            <b-icon-list></b-icon-list>
                        </b-button>
                    </b-button-group>
                </div>
            </div>
        </section>

        <section
            v-if="layout === 'grid'"
            class="colleagues-page__grid"
        ></section>

        <b-list-group v-else></b-list-group>
    </section>
</template>

<script>
export default {
    name: "Colleagues",
    data: () => {
        return {
            layout: "list",
        };
    },
};
</script>

<style lang="scss" scoped>
.colleagues-page {
    background: $color-gray-light;
    height: 100vh;
    padding: 1.5rem;
}

.colleagues-page__heading {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.colleagues-page__toolbar {
    background: $color-white;
    padding: 1rem;
}
</style>
