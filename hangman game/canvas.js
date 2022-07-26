/* canvas */

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 200;

export function manDraw(attempts) {
	switch(attempts) {
		case(6):
			ctx.beginPath();
			ctx.lineWidth=4;
			ctx.moveTo(150, 20);
			ctx.lineTo(150, 200);

			ctx.stroke();

			break;
		case(5):
			ctx.beginPath();
			ctx.moveTo(150, 20);
			ctx.lineTo(220, 20);

			ctx.moveTo(150, 60);
			ctx.lineTo(190, 20);
			ctx.stroke();

			break;
		case(4):
			ctx.beginPath();
			ctx.moveTo(220, 20);
			ctx.lineTo(220, 60);

			ctx.stroke();

			break;
		case(3): // head
			ctx.beginPath();

			ctx.arc(220, 80, 20, 0 * Math.PI, Math.PI * 2, true);

			ctx.stroke();

			break;
		/*case(2): // face



			break;*/
		case(1):
			ctx.beginPath();
			// body
			ctx.moveTo(220, 100);
			ctx.lineTo(220, 150);

			ctx.stroke();

			break;
		case(0):
			ctx.beginPath();
			// arm 1
			ctx.moveTo(220, 100);
			ctx.lineTo(200, 130);
			// arm 2
			ctx.moveTo(220, 100);
			ctx.lineTo(240, 130);

			ctx.stroke();

			break;
		case(-1):
			// leg 1
			ctx.moveTo(220, 150);
			ctx.lineTo(200, 185);
			// leg 2
			ctx.moveTo(220, 150);
			ctx.lineTo(240, 185);

			ctx.stroke();

			break;
	}
}

export function winnerManDraw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	// head
	ctx.arc(220, 80, 20, 0 * Math.PI, Math.PI * 2, true);
	// body
	ctx.moveTo(220, 100);
	ctx.lineTo(220, 150);

	// arm 1
	ctx.moveTo(220, 100);
	ctx.lineTo(200, 130);
	// arm 2
	ctx.moveTo(220, 100);
	ctx.lineTo(240, 130);
	// leg 1
	ctx.moveTo(220, 150);
	ctx.lineTo(200, 185);
	// leg 2
	ctx.moveTo(220, 150);
	ctx.lineTo(240, 185);

	ctx.stroke();
}