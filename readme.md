### Validate Cloud Release

validate release
  -> if action is released, but the release is not latest -> exit 1 with reason "will not deploy a replease, which is not marked as latest"
  -> if action is edited, but changes is not marking this as latest -> 
  exit 1 with reason "will not deploy, because the release change does not mark this as latest"