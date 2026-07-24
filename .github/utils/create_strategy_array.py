import json
import copy

with open("regression.json", "r") as calendar:
    json_data = json.load(calendar)

unique_records = []

for scenario in json_data["scenarios"]:
    countries = scenario.get("countries", [])
    tenants = scenario.get("tenants", [])
    execute_tags = scenario.get("execute_tags", [])
    exclude_tags = scenario.get("exclude_tags", [])
    tags = ''

    if execute_tags or exclude_tags:
        tags = '--tags '
    
    unique_records.extend([
        {
            **copy.deepcopy(scenario),
            "country": country,
            "tenant": tenant,
            "tags": tags + " --tags ".join([f"@{tag}" for tag in execute_tags] + [f"~@{tag}" for tag in exclude_tags])
        }
        for country in countries or [""]
        for tenant in tenants or [""]
    ])

    for record in unique_records:
        record.pop("countries", None)
        record.pop("tenants", None)
        record.pop("execute_tags", None)
        record.pop("exclude_tags", None)


with open("regression.json", "w") as outfile:
    json.dump(unique_records, outfile)