let rival = function rivalChoice(){
    const options = ['Piedra','Papel','Tijera'];
    const choice = options[Math.floor(Math.random() * options.length)];
    // console.log(`el rival ha escogido ${choice}`);
    return choice
}
const rivalChoice = rival();


function play(button){
    let playerChoice = button.value;

    const textTemplate = `<b>Jugador:</b> ${playerChoice}<br><b>Rival:</b> ${rivalChoice}<br><br>`;

    switch(true){

        // caso de empate 
        case playerChoice === rivalChoice:
            Swal.fire({
                title: 'Resultado de la partida',
                html: `${textTemplate} <span class='gameResult-e'>Es un empate</span>`,
                icon: 'info',
                confirmButtonText: 'Jugar de nuevo',
                confirmButtonColor: "#28ad76"
              }).then(function(isConfirm) {
                    location.reload();
              })
            break;

        // caso jugador gana   
        case playerChoice === 'Papel' && rivalChoice === 'Piedra' || 
             playerChoice === 'Piedra' && rivalChoice === 'Tijera' ||
             playerChoice === 'Tijera' && rivalChoice === 'Papel':
            Swal.fire({
                title: 'Resultado de la partida',
                html: `${textTemplate} <span class='gameResult-w'>Jugador gana</span>`,
                icon: 'success',
                confirmButtonText: 'Jugar de nuevo',
                confirmButtonColor: "#28ad76"
              }).then(function(isConfirm) {
                location.reload();
          })
            break;

        // default jugador pierde     
        default:
            Swal.fire({
                title: 'Resultado de la partida',
                html: `${textTemplate} <span class='gameResult-l'>Rival gana</span>`,
                icon: 'error',
                confirmButtonText: 'Jugar de nuevo',
                confirmButtonColor: "#28ad76"
              }).then(function(isConfirm) {
                location.reload();
          })
    }
}