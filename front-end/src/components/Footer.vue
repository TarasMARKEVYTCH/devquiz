<template>
    <footer class="d-flex f-wrap">
        <p class="footer-p">&#9400; Deviquiz</p>
        <ul class="footer-list d-flex f-wrap">
            <li><a href="#">Privacy policy</a></li><span class="separator">|</span>
            <li><a href="#">Cookie policy</a></li><span class="separator">|</span>
            <li><a href="#">Copyrights</a></li>
        </ul>
    </footer>
</template>

<script>

export default {
    name: 'Footer'
}
</script>
<style scoped>
.footer-p{
    width: 100%;
    text-align: center;
    color: #000000;
}
.footer-list{
    width: 100%;
    justify-content: center;
    align-content: flex-end;
    
}
.footer-list li a{
    color: rgb(31, 31, 31);
}
</style>