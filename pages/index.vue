<template>
    <div class="page-container" v-bind:class="{'modal-opened': modalOpened}">
        <Header />
        <div class="title-container">
            <h1 id="page-title">top 10 gaming videos</h1>
            <h2 id="page-subtitle">qj banani dolu</h2>
        </div>
        <div class="grid-container">
            <div class="grid">
                <div class="block-wrapper" v-for="item in blocks" :key="item.id" @click.prevent="openModal(item.id)">
                    <PishtovBlock v-bind="item"/>
                </div>
            </div>
        </div>
        <transition name="fade">
            <PreviewModal :key="modalId" v-if="modalOpened && modalId" :id="modalId" @closemodal="closeModal" @previousmodal="prevModal" @nextmodal="nextModal" style="transition-duration: 0.1s; overscroll-behavior: contain;"/>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blocks: [
                    { id: 1, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#a74aa1"},
                    { id: 2, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#a74aa1"},
                    { id: 3, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#a74aa1"},
                    { id: 4, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#a74aa1"},
                    { id: 5, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#f9e282"},
                    { id: 6, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#f9e282"},
                    { id: 7, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#f9e282"},
                    { id: 8, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c574" },
                    { id: 9, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c0ff" },
                    { id: 10, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c0ff" },
                    { id: 11, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c0ff" },
                    { id: 12, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c0ff" },
                    { id: 13, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c574" },
                    { id: 14, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c574" },
                    { id: 15, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c574" },
                    { id: 16, title: "Дихибридно кръстосване на маймуна с охлюв с натриев димонотрифосфат и жаба с клюн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Richard_Matthew_Stallman.jpeg", creator: "joro_napikaniq", stars: 25, color: "#00c574" },
            ],
            modalOpened: false,
            modalId: 1
        }
    },
    methods: {
        printer(i){
            console.log(i)
        },
        openModal(id){
            this.printer(id);
            this.modalOpened = true;
            this.modalId = id;
        },
        closeModal(){
            this.modalOpened = false
            this.modalId = 0
        },
        prevModal(){
            if(this.modalId == 1){
                this.modalId = this.blocks.length
            }else{
                this.modalId--
            }
        },
        nextModal(){
            if(this.modalId == this.blocks.length){
                this.modalId = 1
            }else{
                this.modalId++
            }
        }
    }
}
</script>

<script setup>

</script>

<style v-if="true">
body {
    margin: 0;
	overflow-x: hidden;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.modal-opened {
    overflow: hidden;
}
.page-container {
    min-height: 100vh;
    width: 100%;
    align-items: center;
    background-color: #001e26;
}
.title-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 100;
}
#page-title {
    margin-bottom: 0px;
    color: #ffffff;
    flex: 1 0 0%;
    font-family: "Comfortaa";
    font-size: 5em;
    max-width: 1280px;
    text-align: center;
}
#page-subtitle {
    color: white;
}
.grid-container {
    min-width: 100%;
    display: flex;
    justify-content: center;
}
.grid {
    justify-content: center;
    /* max-width: 80rem; */
    /* min-width: 60rem; */
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-template-rows: repeat(auto-fill, 300px);
    column-gap: 20px;
    row-gap: 20px;
    grid-auto-flow: row;
    width: 80%;
}
.block-wrapper {
    flex: 1 0 0%;
    font-family: 'Comfortaa';
    width: 350;
    min-height: 300px;
    transition-duration: 0.3s;
    cursor: pointer;
    backface-visibility: hidden;
}
.block-wrapper:hover {
    transform: scale(1.05);
    transition-duration: 0.3s;
}
</style>
