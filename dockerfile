#MANUAL 

FROM repository.iotway.net/net.iotway.raspberrypi.electron.nodejs:20190213

RUN ["cross-build-start"]

RUN mkdir /helloWorld

ADD package.json /helloWorld

RUN cd /helloWorld && npm install --production

ADD main.js /helloWorld

ADD ui /helloWorld/ui

ADD start.sh / 

RUN chmod a+x /start.sh

RUN ["cross-build-end"]

CMD /start.sh