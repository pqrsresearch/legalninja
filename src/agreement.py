# conda activate legalninja
# pip install dataclass

import json
from dataclasses import dataclass
from typing import List, Dict


@dataclass
class Agreement:
    clauses: List["Clause"]
    metadata: Dict[str, str] # {id, name, descrip...}

    def to_json(self):
        return {"clauses": [x.to_json() for x in self.clauses],
                "metadata": self.metadata}

@dataclass
class Clause:
    branches: List["Branch"]
    metadata: Dict[str, str] # {id, name, descrip...}

    def to_json(self):
        return {"branches": [x.to_json() for x in self.branches],
                "metadata": self.metadata}

@dataclass
class Branch:
    questions: List["Question"]
    metadata: Dict[str, str] # {id, descrip...}
    is_recommended: bool

    def to_json(self):
        return {"questions": [x.to_json() for x in self.questions],
                "metadata": self.metadata,
                "is_recommended": self.is_recommended}

@dataclass
class Question:
    q: str
    options: List[str]
    q_template: str
    user_resp : str
    metadata: Dict[str, str] # {id, descrip...}
    recommended_resp: str

    def gen_st(self):
       return f"{self.q_template.replace('[USER]', self.user_resp or 'TBD')}"

    def to_json(self):
        return {"question": self.q,
                "options": [x for x in self.options],
                "metadata": self.metadata,
                "recommended_resp": self.recommended_resp}


if __name__ == '__main__':
    # b = Branch()
    clauses: List[Clause] = []
    general_clause = Clause(branches=[], metadata = { "id": "c1", "name": "General", "description": "(clause c1) Rental agreement involves two parties..." })
    property_clause = Clause(branches=[], metadata = { "id": "c2", "name": "Property", "description": "(clause c2) Rental agreement involves two parties..." })
    parties_clause = Clause(branches=[], metadata = { "id": "c3", "name": "Parties", "description": "(clause c3) Rental agreement involves two parties..." })
    terms_clause = Clause(branches=[], metadata = { "id": "c4", "name": "Terms", "description": "(clause c4) Rental agreement involves two parties..." })
    final_details_clause = Clause(branches=[], metadata = { "id": "c5", "name": "Final details", "description": "(clause c5) Rental agreement involves two parties..." })

    # GENERAL clause
    general_clause.branches.append(Branch(questions=[
           Question(q="What type of property", recommended_resp="House", options=["House", "Apartment", "Mobile home", "room"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
           Question(q="Is it old or new"     , recommended_resp="Old"  , options=["Old", "New"]                               , metadata={"description": "Question2 about property"}, user_resp="", q_template="You know that the property is [USER]"),
        ],
        is_recommended=True,
        metadata= { "id": "c1_b1", "name": "(branch c1_b1) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )


    # PROPERTY clause
    property_clause.branches.append(Branch(questions=[
        Question(q="Yes or no", recommended_resp="Yes", options=["Yes", "No"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=True,
        metadata= { "id": "c2_b1", "name": "(branch c2_b1) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    property_clause.branches.append(Branch(questions=[
        Question(q="Good or bad", recommended_resp="Good", options=["Good", "Bad"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=False,
        metadata= { "id": "c2_b2", "name": "(branch c2_b2) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    # PARTIES clause
    parties_clause.branches.append(Branch(questions=[
        Question(q="Yes or no", recommended_resp="Yes", options=["Yes", "No"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=True,
        metadata= { "id": "c3_b1", "name": "(branch c3_b1) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    parties_clause.branches.append(Branch(questions=[
        Question(q="Good or bad", recommended_resp="Good", options=["Good", "Bad"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=False,
        metadata= { "id": "c3_b2", "name": "(branch c3_b2) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    # TERMS clause
    terms_clause.branches.append(Branch(questions=[
        Question(q="Yes or no", recommended_resp="Yes", options=["Yes", "No"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=True,
        metadata= { "id": "c4_b1", "name": "(branch c4_b1) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    terms_clause.branches.append(Branch(questions=[
        Question(q="Good or bad", recommended_resp="Good", options=["Good", "Bad"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=False,
        metadata= { "id": "c4_b2", "name": "(branch c4_b2) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    # FINAL_DETAILS clause
    final_details_clause.branches.append(Branch(questions=[
        Question(q="Yes or no", recommended_resp="Yes", options=["Yes", "No"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=True,
        metadata= { "id": "c5_b1", "name": "(branch c5_b1) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )

    final_details_clause.branches.append(Branch(questions=[
        Question(q="Good or bad", recommended_resp="Good", options=["Good", "Bad"], metadata={"description": "Question1 about property"}, user_resp="", q_template="You are aware that the type of property is [USER]"),
    ],
        is_recommended=False,
        metadata= { "id": "c5_b2", "name": "(branch c5_b2) Final details", "description": "(clause c5) Rental agreement involves two parties..." })
    )


    a = Agreement( clauses=[general_clause, property_clause, parties_clause, terms_clause, final_details_clause], metadata = { "id": "a1", "name": "Rental agreement", "description": "Rental agreement involves two parties..." })

    print(json.dumps(a.to_json(), indent=4))

