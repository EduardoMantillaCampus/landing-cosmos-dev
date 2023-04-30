export default {
    async moveLetter(div) {
        let arr = div;
        let interval;
        let promise; 
        let state;
        for(let w = 0; w < arr.length; w++){
            state = false
            promise = await new Promise((resolve) => {
                interval = setInterval(() => {
                resolve(arr[w].classList.add('active_op'))
            }, 90)})
        }
        state = await !state;
        return state
    },
    async viewState() {
        let res = await this.moveLetter(document.querySelectorAll('#letters div span'))
        if(res){
            document.querySelectorAll('#letters div span').forEach( (e) => {
                setTimeout(() => {
                    e.style.opacity = 1;
                    e.style.color = "#fff"
                }, 500)
            })
        }
    }
}