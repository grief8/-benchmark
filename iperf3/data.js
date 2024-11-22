window.BENCHMARK_DATA = {
  "lastUpdate": 1732262328227,
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
      }
    ]
  }
}