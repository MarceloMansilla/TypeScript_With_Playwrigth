import json
import copy

with open("regression.json", "r") as calendar:
    json_data = json.load(calendar)

unique_records = []

for scenario in json_data["scenarios"]:
    browsers = scenario.get("browsers", [])
    execute_tags = scenario.get("execute_tags", [])
    exclude_tags = scenario.get("exclude_tags", [])

    # Build a single --grep regex: lookaheads require each execute_tag to be
    # present, negative lookaheads require each exclude_tag to be absent.
    tags = (
        "".join(f"(?=.*@{tag})" for tag in execute_tags)
        + "".join(f"(?!.*@{tag})" for tag in exclude_tags)
    )

    unique_records.extend([
        {
            **copy.deepcopy(scenario),
            "browser": browser,
            "tags": tags
        }
        for browser in browsers or [""]
    ])

    for record in unique_records:
        record.pop("browsers", None)
        record.pop("execute_tags", None)
        record.pop("exclude_tags", None)


with open("regression.json", "w") as outfile:
    json.dump(unique_records, outfile)