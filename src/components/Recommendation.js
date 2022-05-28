function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (isSpring) {
        return <div>It's spring, time to repot <span>🪴</span></div>
    } else {
        return <div>It's not the time to repot</div>
    }
}

export default Recommendation;
