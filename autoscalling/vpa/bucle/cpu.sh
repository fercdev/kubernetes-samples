#!/bin/bash

cpu() {
    while true; do
        :
    done
}

memory() {
    arr=()
    while true; do
        arr+=($(seq 1 10000))
        sleep 0.1
    done
}

cpu &
memory &
wait