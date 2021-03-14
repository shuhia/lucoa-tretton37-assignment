<template>
    <section class="colleagues-page">
        <h1 class="colleagues-page__heading">
            The fellowship of the tretton37
        </h1>

        <!-- TODO: Rewrite toolbar section with BootstrapVue components -->
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
                        <b-button
                            variant="light"
                            :pressed="layout === 'grid'"
                            @click="layout = 'grid'"
                        >
                            <b-icon-grid-fill></b-icon-grid-fill>
                        </b-button>
                        <b-button
                            variant="light"
                            :pressed="layout === 'list'"
                            @click="layout = 'list'"
                        >
                            <b-icon-list></b-icon-list>
                        </b-button>
                    </b-button-group>
                </div>
            </div>
        </section>

        <b-container
            v-if="layout === 'grid'"
            class="colleagues-page__grid"
            fluid
        >
            <b-row cols="1" cols-md="2" cols-lg="3" cols-xl="4">
                <b-col v-for="c in colleagues" :key="c.name" class="mb-4">
                    <Card
                        :title="c.name"
                        :subtitle="c.office"
                        :imgSrc="c.image"
                    />
                </b-col>
            </b-row>
        </b-container>

        <b-list-group class="colleagues-page__list shadow-sm" v-else>
            <b-list-group-item v-for="c in colleagues" :key="c.name">
                {{ c.name }}
                {{ c.office }}
                <img :src="c.image" />
            </b-list-group-item>
        </b-list-group>
    </section>
</template>

<script>
import axios from "axios";
import Card from "../Card";

export default {
    name: "Colleagues",
    components: {
        Card,
    },
    data: () => {
        return {
            filter: "",
            layout: "grid",
            colleagues: [],
        };
    },
    methods: {
        getColleagues() {
            axios
                .get("http://localhost:3000/get/colleagues")
                .then((resp) => (this.colleagues = resp.data))
                .catch((err) => console.log(err));
        },
    },
    mounted() {
        this.getColleagues();
    },
};
</script>

<style lang="scss" scoped>
.colleagues-page {
    background: $color-gray-light;
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
    margin-bottom: 1.5rem;
}

.colleagues-page__grid {
    padding-left: 0;
    padding-right: 0;
}
</style>
