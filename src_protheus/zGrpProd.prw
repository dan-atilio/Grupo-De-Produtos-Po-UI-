//Bibliotecas
#Include "TOTVS.ch"

/*/{Protheus.doc} User Function zGrpProd
Fun��o para cadastro de grupo de produtos utilizando PO UI
@type  Function
@author Atilio
@since 18/06/2024
/*/

User Function zGrpProd()
    Local aArea := FWGetArea()

    //Aciona a aplica��o feita com Angular e PO UI
    FWCallApp("prj-grupo-de-produtos")

    FWRestArea(aArea)
Return
