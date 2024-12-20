FROM ubuntu:20.04

WORKDIR /root

RUN apt-get update && apt-get install -y \
    openssl \
    git \
    curl \
    ca-certificates \
    gnupg \
    nano \
    lsb-release \
    && apt-get clean

RUN curl -LO https://dl.k8s.io/release/v1.27.2/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl
    
CMD ["bash"]
