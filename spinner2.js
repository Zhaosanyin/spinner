
const animationFrame = [ '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ' ];

const animateFunc = (frame, i) =>{
  setTimeout(()=> {
    process.stdout.write(frame[i]);
    if (i === frame.length - 1) {
      process.stdout.write('\n');
      return;
    }
    animateFunc(frame, i + 1);
  }, 300);

};

animateFunc(animationFrame, 0);