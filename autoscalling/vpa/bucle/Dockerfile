FROM alpine:latest

RUN apk add --no-cache bash

COPY cpu.sh /usr/local/bin/cpu.sh

RUN chmod +x /usr/local/bin/cpu.sh

CMD [ "/usr/local/bin/cpu.sh" ]