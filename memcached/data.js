window.BENCHMARK_DATA = {
  "lastUpdate": 1737625161175,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "t8_conc32_window10k": [
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611055357,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 10k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "606648",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "833197",
            "unit": "operations per second",
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
          "id": "542592a83596fbe75ee9facbb081aecaafc6beb3",
          "message": "test",
          "timestamp": "2025-01-23T09:00:53Z",
          "url": "https://github.com/grief8/asterinas/commit/542592a83596fbe75ee9facbb081aecaafc6beb3"
        },
        "date": 1737625155736,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 10k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "594085",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "749561",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "t8_conc32_window20k": [
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
          "id": "fee9ccafc134186e61caeee176109794b4737ed8",
          "message": "ss",
          "timestamp": "2025-01-20T06:41:48Z",
          "url": "https://github.com/grief8/asterinas/commit/fee9ccafc134186e61caeee176109794b4737ed8"
        },
        "date": 1737358238641,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput with 8 client threads, 32 concurrency and 20k window",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "627361",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "752694",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}