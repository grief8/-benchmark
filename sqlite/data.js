window.BENCHMARK_DATA = {
  "lastUpdate": 1731068476380,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "ext2_deletes_between": [
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
          "id": "ab00af178680ebe99332c0b5da95ad86b0447643",
          "message": "aa",
          "timestamp": "2024-11-08T12:14:17Z",
          "url": "https://github.com/grief8/asterinas/commit/ab00af178680ebe99332c0b5da95ad86b0447643"
        },
        "date": 1731068470115,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ext2)",
            "value": "0.188s",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ext2)",
            "value": "0.206s",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}