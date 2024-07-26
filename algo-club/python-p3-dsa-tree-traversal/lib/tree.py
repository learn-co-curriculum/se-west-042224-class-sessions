class Tree:
    def __init__(self, root=None):
        self.root = root

    def get_element_by_id(self, id):
        nodes_to_visit = [self.root]
        while len(nodes_to_visit) > 0:
            node = nodes_to_visit.pop(0)
            if node["id"] == id:
                return node
            nodes_to_visit.extend(node["children"])
        return None
