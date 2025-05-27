#!/bin/bash
cd /tmp/kavia/workspace/code-generation/3d-virtual-rubiks-challenge-1296-379bdfd8/3d_virtual_rubiks_challenge
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

