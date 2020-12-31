import Jimp from 'jimp';

/**
 * @class GenerateCaptcha
 */

class GenerateCaptcha {
  private _buffer: Buffer;

  private _correctAnswer: number;

  public static async generateCaptcha(): Promise<GenerateCaptcha> {
  	const image = await Jimp.read('src/modules/GenerateCaptcha/images/base.png');
  	const mario = await Jimp.read('src/modules/GenerateCaptcha/images/mario.png');
  	const marios = [mario.clone(), mario.clone(), mario.clone(), mario.clone()];
  	await Promise.all(marios.map((value, i) => value.rotate(100 * (i + 1))));
  	const goodIndex = Math.floor(Math.random() * 3);
  	marios[goodIndex] = mario;

  	await Promise.all(marios.map((value) => value.scaleToFit(350, 350)));

  	await Promise.all(
  		marios.map((value, index) => {
  			switch (index) {
  			case 0:
  				return image.composite(value, 31, 10);

  			case 1:
  				return image.composite(value, 565, 10);

  			case 2:
  				return image.composite(value, 31, 565);

  			default:
  				return image.composite(value, 565, 565);
  			}
  		}),
  	);
  	const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

  	return new GenerateCaptcha(buffer, goodIndex);
  }

  /**
 * Create a captcha
 * @param buffer - The created picture
 * @param correctAnswer - The part of the picture where Mario is right
 */
  private constructor(buffer: Buffer, correctAnswer: number) {
  	this._buffer = buffer;
  	this._correctAnswer = correctAnswer;
  }

  public get buffer(): Buffer {
  	return this._buffer;
  }

  public get correctAnswer(): number {
  	return this._correctAnswer;
  }
}

export default GenerateCaptcha;
