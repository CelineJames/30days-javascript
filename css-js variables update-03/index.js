const inputs = document.querySelectorAll('.controls input'); 


function handleUpdate(){
    console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.body.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));