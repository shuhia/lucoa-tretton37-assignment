<template>
    <section class="colleagues-page">
        <h1 class="colleagues-page__heading">
            The fellowship of the tretton37
        </h1>

        <b-container class="colleagues-page__toolbar shadow-sm" fluid>
            <b-row no-gutters>
                <b-col cols="8">
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
                </b-col>

                <b-col class="d-flex justify-content-end">
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
                </b-col>
            </b-row>
        </b-container>

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
            <b-list-group-item
                v-for="c in colleagues"
                :key="c.name"
                class="l-list-group-item"
            >
                <div class="l-list-group-item__content d-flex w-100 p-1">
                    <b-img
                        class="l-list-group-item__image mr-4"
                        :src="c.image"
                        fluid
                    ></b-img>
                    <div class="l-list-group-item__content-right w-100">
                        <h5 class="l-list-group-item__title">
                            {{ c.name }}
                        </h5>
                        <h6 class="l-list-group-item__subtitle">
                            {{ c.office }}
                        </h6>
                        <div class="l-list-group-item__link-icons">
                            <b-icon-linkedin
                                class="l-list-group-item__link-icon"
                            ></b-icon-linkedin>
                            <b-icon-github
                                class="l-list-group-item__link-icon"
                            ></b-icon-github>
                            <b-icon-twitter
                                class="l-list-group-item__link-icon"
                            ></b-icon-twitter>
                        </div>
                    </div>
                </div>
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

.l-list-group-item__content {
    word-wrap: break-word;
}

.l-list-group-item__image {
    min-width: 100px;
    object-fit: contain;
}

.l-list-group-item__content-right {
    min-width: 0;
}

.l-list-group-item__title {
    margin-bottom: 0.75rem;
}

.l-list-group-item__link-icons {
    font-size: 1.25rem;
}

.l-list-group-item__link-icon:not(:last-child) {
    margin-right: 0.5rem;
}
</style>
