export const agreementData =
{
    "clauses": [
        {
            "branches": [
                {
                    "questions": [
                        {
                            "question": "What type of property?",
                            "options": [
                                "House",
                                "Apartment",
                                "Mobile home",
                                "room"  
                            ],
                            "metadata": {
                                "id": "c0_b0_q0",
                                "description": "Question1 about property",
                                "answer_template": "The term of lease commences at $"
                            },
                            "recommended_resp": "House"
                        },
                        {
                            "question": "Is it old or new?",
                            "options": [
                                "Old",
                                "New"
                            ],
                            "metadata": {
                                "id": "c0_b0_q1",
                                "description": "Question2 about property"
                            },
                            "recommended_resp": "Old"
                        }
                    ],
                    "metadata": {
                        "id": "c0_b0",
                        "name": "Branch: General details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": true
                }
            ],
            "metadata": {
                "id": "c0",
                "name": "General",
                "description": "(clause c1) Rental agreement involves two parties..."
            }
        },
        {
            "branches": [
                {
                    "questions": [
                        {
                            "question": "Will photos of the property be attached to the final document?",
                            "options": [
                                "Yes",
                                "No"
                            ],
                            "metadata": {
                                "id": "c1_b0_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Yes"
                        }
                    ],
                    "metadata": {
                        "id": "c1_b0",
                        "name": "Branch: Property details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": true
                },
                {
                    "questions": [
                        {
                            "question": "Good or bad",
                            "options": [
                                "Good",
                                "Bad"
                            ],
                            "metadata": {
                                "id": "c1_b1_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Good"
                        }
                    ],
                    "metadata": {
                        "id": "c1_b1",
                        "name": "Branch: Property details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": false
                }
            ],
            "metadata": {
                "id": "c1",
                "name": "Property",
                "description": "(clause c2) Rental agreement involves two parties...",
                "fixedContent":{
                    "title_line":"Leased Property",
                    "sublist":[
                       'line oneThe Landlord agrees to rent to the Tenant the house, municipally described as ______________________________________________ (the "Property"), for use as residential premises only',
                       'No guests of the Tenants may occupy the Property for longer than one week without the prior written permission of the Landlord.',
                       "No pets or animals are allowed to be kept in or about the Property without the prior written permission of the Landlord. Upon 30 days' notice, the Landlord may revoke any permission previously given pursuant to this clause.",
                       "The Tenant and members of Tenant's household will not smoke anywhere in the Property nor permit any guests or visitors to smoke in the Property.",
                       "The Property is provided to the Tenant without any furnishings."
                    ]
                 }
            }
        },
        {
            "branches": [
                {
                    "questions": [
                        {
                            "question": "Does a property manager look after the property?",
                            "options": [
                                "Yes",
                                "No"
                            ],
                            "metadata": {
                                "id": "c2_b0_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Yes"
                        }
                    ],
                    "metadata": {
                        "id": "c2_b0",
                        "name": " Final details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": true
                },
                {
                    "questions": [
                        {
                            "question": "Good or bad",
                            "options": [
                                "Good",
                                "Bad"
                            ],
                            "metadata": {
                                "id": "c2_b1_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Good"
                        }
                    ],
                    "metadata": {
                        "id": "c2_b1",
                        "name": " Final details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": false
                }
            ],
            "metadata": {
                "id": "c2",
                "name": "Parties",
                "description": "(clause c3) Rental agreement involves two parties..."
            }
        },
        {
            "branches": [
                {
                    "questions": [
                        {
                            "question": "How often will the tenant pay rent?",
                            "options": [
                                "Weekly",
                                "Every 2 Weeks",
                                "Monthly",
                                "Annually"
                            ],
                            "options_tooltip": [
                                "Weekly_tooltip",
                                "Every 2 Weeks tooltip",
                                "Monthly tooltip",
                                "Annually tooltip"
                            ],
                            "metadata": {
                                "id": "c3_b0_q0",
                                "description": "Question1 about property",
                                "answer_template": "$"
                            },
                            "recommended_resp": "Yes"
                        }
                    ],
                    "metadata": {
                        "id": "c3_b0",
                        "name": " Final details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": true
                },
                {
                    "questions": [
                        {
                            "question": "Good or bad",
                            "options": [
                                "Good",
                                "Bad"
                            ],
                            "metadata": {
                                "id": "c3_b1_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Good"
                        },
                        {
                            "question": "Happy or sad",
                            "options": [
                                "Happy",
                                "Sad"
                            ],
                            "metadata": {
                                "id": "c3_b1_q1",
                                "description": "Question2 about property"
                            },
                            "recommended_resp": "Happy"
                        }
                    ],
                    "metadata": {
                        "id": "c3_b1",
                        "name": " Final details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": false
                }
            ],
            "metadata": {
                "id": "c3",
                "name": "Terms",
                "description": "(clause c4) Rental agreement involves two parties...",
                "fixedContent": {
                    "title_line": "Term",
                    "sublist": [
                        "The term of the Lease commences at 12:00 noon on 12 July 2022 and ends at 12:00 noon on 12 July 2022.",
                        "Upon any notice required under the Act, or no notice where there is no Act or the Act does not specify, the Landlord may terminate this tenancy where the Tenant has breached any provision of this rental, including the failure to pay the Rent for at least one month. ",
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Rent",
                    'sublist': [
                        "Subject to the provisions of this Lease, the rent for the Property is ₹___________per",
                        "The Tenant will pay the Rent on or before the ____________________ of each and every month of the term of this Lease to the Landlord at ______________________ or at such other place as the Landlord may later designate by cash or cheque."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    'title_line': "Quiet Enjoyment",
                    "sublist": [
                        "The Landlord covenants that on paying the Rent and performing the covenants contained in this Lease, the Tenant will peacefully and quietly have, hold, and enjoy the Property for the agreed term."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Tenant Improvement",
                    "sublist": [
                        "The Tenant will obtain written permission from the Landlord before doing any of the following: ",
                        "applying adhesive materials, or inserting nails or hooks in walls or ceilings other than two small picture hooks per wall;",
                        "painting, wallpapering, redecorating or in any way significantly altering the appearance of the Property;",
                        "removing or adding walls, or performing any structural alterations;",
                        "changing the amount of heat or power normally used on the Property as well as installing additional electrical wiring or heating units;",
                        "placing or exposing or allowing to be placed or exposed anywhere inside or outside the Property any placard, notice or sign for advertising or any other purpose; or",
                        "affixing to or erecting upon or near the Property any radio or TV antenna or tower.",

                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Attorney Fees",
                    "sublist": [
                        "In the event that any action is filed in relation to this Lease, the unsuccessful Party in the action will pay to the successful Party, in addition to all the sums that either Party may be called on to pay, a reasonable sum for the successful Party's attorney fees."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Governing Law",
                    "sublist": [
                        "This Lease will be construed in accordance with, and exclusively governed by, the laws of Uttar Pradesh."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Severability",
                    "sublist": [
                        'If there is a conflict between any provision of this Lease and the applicable legislation of Uttar Pradesh (the "Act"), the Act will prevail and such provisions of the Lease will be amended or deleted as necessary in order to comply with the Act. Further, any provisions that are required by the Act are incorporated into this Lease. ',
                        "The invalidity or unenforceability of any provisions of this Lease will not affect the validity or enforceability of any other provision of this Lease. Such other provisions remain in full force and effect."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Amendment of Lease",
                    "sublist": [
                        "This Lease may only be amended or modified by a written document executed by the Parties."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Assignment and Subletting",
                    "sublist": [
                        "Without the prior, express, and written consent of the Landlord, the Tenant will not assign this Lease, or sublet or grant any concession or licence to use the Property or any part of the Property. A consent by the Landlord to one assignment, subletting, concession, or licence will not be deemed to be a consent to any subsequent assignment, subletting, concession, or licence. Any assignment, subletting, concession, or licence without the prior written consent of the Landlord, or an assignment or subletting by operation of law, will be void and will, at the Landlord's option, terminate this Lease."
                    ]          
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Maintenance",
                    "sublist": [
                        "The Tenant will, at its sole expense, keep and maintain the Property and appurtenances in good and sanitary condition and repair during the term of this Lease and any renewal of this Lease.",
                        "Major maintenance and repair of the Property not due to the Tenant's misuse, waste, or neglect or that of the Tenant's employee, family, agent, or visitor, will be the responsibility of the Landlord or the Landlord's assigns."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Care and Use of Property",
                    "sublist": [
                        "The Tenant will promptly notify the Landlord of any damage, or of any situation that may significantly interfere with the normal use of the Property or to any furnishings supplied by the Landlord.",
                        "The Tenant will not engage in any illegal trade or activity on or about the Property.",
                        "The Parties will comply with standards of health, sanitation, fire, housing and safety as required by law.",
                        "If the Tenant is absent from the Property and the Property is unoccupied for a period of 4 consecutive days or longer, the Tenant will arrange for regular inspection by a competent person. The Landlord will be notified in advance as to the name, address and phone number of the person doing the inspections.",
                        "At the expiration of the term of this Lease, the Tenant will quit and surrender the Property in as good a state and condition as they were at the commencement of this Lease, reasonable use and wear and tear excepted.",
                        "During the term of this Lease or after its termination, the Landlord may charge the Tenant for replacement of locks and/or lost keys to the Property, and any administrative fees associated with the replacement as a result of the Tenant's misplacement of the keys."
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Rules and Regulations",
                    "sublist": [
                        "The Tenant will obey all rules and regulations of the Landlord regarding the Property.",
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "Address for Notice",
                    "sublist": [
                        "For any matter relating to this tenancy, the Tenant may be contacted at the Property or through the phone number below. After this tenancy has been terminated, the contact information of the Tenant is:",
                        "Name: _________________________",
                        "Phone: _________________________",
                        "Post termination notice address: ________________________________________________________",
                        "For any matter relating to this tenancy, whether during or after this tenancy has been terminated, the Landlord's address for notice is:",
                        "Name: _________________________",
                        "Address: ______________________",
                        "The contact information for the Landlord is:",
                        "Phone: _________________________"
                    ]
                }
            }
        },
        {
            "branches": [],
            "metadata": {
                "fixedContent": {
                    "title_line": "General Provisions",
                    "sublist": [
                        "All monetary amounts stated or referred to in this Lease are based in the Indian rupee.",
                        "Any waiver by the Landlord of any failure by the Tenant to perform or observe the provisions of this Lease will not operate as a waiver of the Landlord's rights under this Lease in respect of any subsequent defaults, breaches or non-performance and will not defeat or affect in any way the Landlord's rights in respect of any subsequent default or breach.",
                        "This Lease will extend to and be binding upon and inure to the benefit of the respective heirs, executors, administrators, successors and assigns, as the case may be, of each Party. All covenants are to be construed as conditions of this Lease.",
                        "All sums payable by the Tenant to the Landlord pursuant to any provision of this Lease will be deemed to be additional rent and will be recovered by the Landlord as rental arrears.",
                        "Locks may not be added or changed without the prior written agreement of both Parties. ",
                        "Headings are inserted for the convenience of the Parties only and are not to be considered when interpreting this Lease. Words in the singular mean and include the plural and vice versa. Words in the masculine mean and include the feminine and vice versa.",
                        "This Lease may be executed in counterparts. Facsimile signatures are binding and are considered to be original signatures.",
                        "This Lease constitutes the entire agreement between the Parties. Any prior understanding or representation of any kind preceding the date of this Lease will not be binding on either Party except to the extent incorporated in this Lease.",
                        "The Tenant will indemnify and save the Landlord, and the owner of the Property where different from the Landlord, harmless from all liabilities, fines, suits, claims, demands and actions of any kind or nature for which the Landlord will or may become liable or suffer by reason of any breach, violation or non-performance by the Tenant or by any person for whom the Tenant is responsible, of any covenant, term, or provisions hereof or by reason of any act, neglect or default on the part of the Tenant or other person for whom the Tenant is responsible. Such indemnification in respect of any such breach, violation or non-performance, damage to property, injury or death occurring during the term of the Lease will survive the termination of the Lease, notwithstanding anything in this Lease to the contrary.",
                        "The Tenant agrees that the Landlord will not be liable or responsible in any way for any personal injury or death that may be suffered or sustained by the Tenant or by any person for whom the Tenant is responsible who may be on the Property of the Landlord or for any loss of or damage or injury to any property, including cars and contents thereof belonging to the Tenant or to any other person for whom the Tenant is responsible.",
                        "The Tenant is responsible for any person or persons who are upon or occupying the Property or any other part of the Landlord's premises at the request of the Tenant, either express or implied, whether for the purposes of visiting the Tenant, making deliveries, repairs or attending upon the Property for any other reason. Without limiting the generality of the foregoing, the Tenant is responsible for all members of the Tenant's family, guests, servants, tradesmen, repairmen, employees, agents, invitees or other similar persons.",
                        "Time is of the essence in this Lease."
                    ]
                }
            }
        },
        {
            "branches": [
                {
                    "questions": [
                        {
                            "question": "Is the landlord required to make improvements to the property?",
                            "options": [
                                "Yes",
                                "No"
                            ],
                            "metadata": {
                                "id": "c4_b0_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Yes"
                        }
                    ],
                    "metadata": {
                        "id": "c4_b0",
                        "name": " Final details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": true
                },
                {
                    "questions": [
                        {
                            "question": "Good or bad",
                            "options": [
                                "Good",
                                "Bad"
                            ],
                            "metadata": {
                                "id": "c4_b1_q0",
                                "description": "Question1 about property"
                            },
                            "recommended_resp": "Good"
                        }
                    ],
                    "metadata": {
                        "id": "c4_b1",
                        "name": "(branch c5_b2) Final details",
                        "description": "(clause c5) Rental agreement involves two parties..."
                    },
                    "is_recommended": false
                }
            ],
            "metadata": {
                "id": "c4",
                "name": "Final details",
                "description": "(clause c5) Rental agreement involves two parties..."
            }
        }
    ],
    "metadata": {
        "id": "a1",
        "name": "Rental agreement",
        "description": "Rental agreement involves two parties..."
    }
};