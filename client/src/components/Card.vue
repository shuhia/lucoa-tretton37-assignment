<template>
    <b-card no-body bg-variant="light" class="l-card shadow">
        <b-card-body class="l-card__content">
            <b-img
                class="l-card__image"
                :src="imgSrc"
                :alt="title"
                fluid
            ></b-img>
            <b-row class="l-card__description" no-gutters>
                <b-col class="l-card__description-left">
                    <b-card-title class="l-card__title">
                        {{ title }}
                    </b-card-title>
                    <b-card-sub-title class="l-card__subtitle">
                        Office: {{ subtitle }}
                    </b-card-sub-title>
                </b-col>
                <b-col class="l-card__description-right">
                    <b-icon-linkedin
                        class="l-card__link-icon"
                    ></b-icon-linkedin>
                    <b-icon-github class="l-card__link-icon"></b-icon-github>
                    <b-icon-twitter class="l-card__link-icon"></b-icon-twitter>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    name: "Card",
    props: {
        title: {
            type: String,
            default: "",
        },
        subtitle: {
            type: String,
            default: "",
        },
        imgSrc: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
.l-card {
    border: none;
    height: 400px;
}

.l-card__content {
    display: flex;
    flex-direction: column;
}

.l-card__image {
    min-height: 0;
    object-fit: contain;
    margin-bottom: 1rem;
}

.l-card__description {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.l-card__title {
    font-size: 1.25rem;
}

.l-card__description-right {
    display: flex;
    justify-content: flex-end;
}

.l-card__link-icon:not(:last-child) {
    margin-right: 0.5rem;
}

@media (max-width: 576px) {
    .l-card__description {
        font-size: 1rem;
    }

    .l-card__title {
        font-size: 1rem;
    }

    .l-card__subtitle {
        font-size: 0.75rem;
    }
}
</style>
