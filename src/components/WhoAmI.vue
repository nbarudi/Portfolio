
<template>
    <h1>Who Am I?</h1>
    <div class="content">
        <div class="list">
            <p>Location: Ontario, Canada</p>
            <p>Email: nbarudi@outlook.com</p>
            <p>Website: bungo.ca</p>
            <p>Degree: <b>In Progress</b></p>
            <p>A Little About Me:</p>
            <ul>
                <li>A motivated developer, always looking for ways to improve skills by taking on new projects.</li>
                <li>Quick Learner when given new technologies or concepts to learn and understand.</li>
                <li>An ever growing passion for software and technology.</li>
                <li>A Reliable worker, able to complete tasks before deadlines with no external assistance.</li>
                <li>Always looking for new and interesting ways to finish goals.</li>
                <li>Strong interpersonal and teamwork skills gained from experience working in a fast pased environment.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    hr.rounded {
        border-top: 8px solid;
        border-radius: 5px;
        color: var(--foreground);
    }

    .grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        padding: 0 1rem;
        padding: clamp(0px, 0.1vw, 5px);
    }

    .grid h2 {
        font-size: 20px;
    }
    .grid h3 {
        font-size: 15px;
    }

    .list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 700px;
        text-align: left;
        margin: 0 auto;
        padding: 0.5em;
        border: 1px solid black;
        box-shadow: 0 0 10px #ffffff;
        border-radius: 20px;
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tags {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

</style>