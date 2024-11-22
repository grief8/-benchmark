window.BENCHMARK_DATA = {
  "lastUpdate": 1732273497842,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "tcp_virtio_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "d7cec815f2b239f7a33ae992a00a11c6b64f3d96",
          "message": "ss",
          "timestamp": "2024-11-22T07:41:31Z",
          "url": "https://github.com/grief8/asterinas/commit/d7cec815f2b239f7a33ae992a00a11c6b64f3d96"
        },
        "date": 1732262322408,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2728",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1289",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "e4a61253bcf2e0b27e5fe377000cc986fd7f8920",
          "message": "tmp",
          "timestamp": "2024-11-22T10:47:13Z",
          "url": "https://github.com/grief8/asterinas/commit/e4a61253bcf2e0b27e5fe377000cc986fd7f8920"
        },
        "date": 1732273491747,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8166",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1477",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}