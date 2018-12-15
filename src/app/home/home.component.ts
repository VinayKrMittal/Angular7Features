import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  itemSizeDescription = `Before trying to understand this, please note that we have set the height of the container 200px using css(look at the viewport class).
   Now setting the itemSize value
   to 50 means we have container of 200px and the each element inside it is of 50px. 
   So How many elements can be contained at the time? Only 4(200/50 = 4) elements.`;

   minMaxBufferDes = `
   The minBufferPx is the minimum amount of content buffer (in pixels) that the viewport must render. If the viewport ever detects that there is less buffered
   content it will immediately render more. The second buffer parameter is maxBufferPx. This tells the viewport how much buffer space to render back up to 
   when it detects that more buffer is required.
   The interaction of these two buffer parameters can be best 
   illustrated with an example. Supposed that we have the following parameters: itemSize = 50, minBufferPx = 100, maxBufferPx = 250.
   As the user is scrolling through the content the viewport detects that there is only 90px of buffer remaining. Since this is below minBufferPx the viewport must 
   render more buffer. It must render at least enough buffer to get back to maxBufferPx. In this case, it renders 4 items (an additional 200px) to bring the total 
   buffer size to 290px, back above maxBufferPx.`
  ngOnInit() {
  }

}
