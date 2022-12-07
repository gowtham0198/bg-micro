import {HttpException,HttpStatus,Injectable} from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import {join} from 'path';  

@Injectable()
export class AppService { 
  async getSessionData() {
    try {
      const response = await axios.post(
        'https://api.depositphotos.com/?dp_command=login&dp_apikey=7a249bf2e385e13cc89b26ebf82d306e3009f1f5&dp_login_user=removebgELB.elblearning.com&dp_login_password=El23@gu38@@', {
          //headers: {
            //'Accept-Encoding': 'application/json',
          //}
        });

      return response.data;
    } catch (error) {
      return null;
    }
  } 
//   async create(data: any): Promise<   > {
//     return this.   save(data);
// }
  async removeImageBackground(payload) {
    const sessionData = await this.getSessionData();
    //try {
     
      if (sessionData && sessionData.type === 'success') {
        return sessionData
        /* const postData = {
          "dp_apikey": "7a249bf2e385e13cc89b26ebf82d306e3009f1f5",
          "dp_session_id": sessionData.sessionId,
          "dp_image_url": payload.dp_image_url,
          "dp_image_base64": null,
        }; */
        // const headers = {
        //   'Content-Type': 'application/json',
        // };
  
        /* await axios.post("https://api.depositphotos.com/?dp_command=removeBg", postData, {
          headers: headers,
          responseType: 'blob'
        }).then((response) => {
          const urlCreator = window.URL || window.webkitURL
          console.log(response,"ok");
          return urlCreator.createObjectURL(response.data)
          }) */
       // throw new HttpException('Bad Request - Session API failed', HttpStatus.BAD_REQUEST);
      }
      //return removeBgRes.data;
      //const convertedImage = URL.createObjectURL(removeBgRes.data)
      // console.log(Buffer.from(removeBgRes.data, 'binary').toString('base64'));
      // await fs.writeFileSync(join(__dirname, '..', 'public/test.png'), removeBgRes.data);

      // await fs.promises.writeFile(join(__dirname, '..', 'public/test.png'), removeBgRes.data, { encoding: 'binary' });
      //return removeBgRes; 
    /* } catch (error) {
     throw new HttpException('Bad Request - Remove Image Background API failed', HttpStatus.BAD_REQUEST);
    } */
  }
}