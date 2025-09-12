local WindUI = loadstring(game:HttpGet("https://github.com/Footagesus/WindUI/releases/latest/download/main.lua"))()

local ply = game:GetService("Players")
local replicated = game:GetService("ReplicatedStorage")

local plr = ply.LocalPlayer
local char = plr.Character or plr.CharacterAdded:Wait()
local hum = char:WaitForChild("Humanoid")
local hrp = char:WaitForChild("HumanoidRootPart")

local KillAura = false
local KillAuraDistance = 0
local tool

local toolsDamageIDs = {
    ["Old Axe"] = "1_8982038982",
    ["Good Axe"] = "112_8982038982",
    ["Strong Axe"] = "116_8982038982",
    ["Chainsaw"] = "647_8992824875",
    ["Spear"] = "196_8999010016"
}

task.spawn(function()
	while task.wait(0.1) do
		if KillAura then
			tool = char:FindFirstChildOfClass("Tool")
			if tool and toolsDamageIDs[tool.Name] then
					for _, mob in ipairs(workspace.Characters:GetChildren()) do
	                    if mob:IsA("Model") then
	                        local part = mob:FindFirstChildWhichIsA("BasePart")
	                        if part and (part.Position - hrp.Position).Magnitude <= radius then
	                            pcall(function()
	                                game:GetService("ReplicatedStorage"):WaitForChild("RemoteEvents").ToolDamageObject:InvokeServer(mob, tool, damageID, CFrame.new(part.Position))
	                            end)
	                        end
	                    end
					end
                end
		    end
		end
	end
end)

local Window = WindUI:CreateWindow({
    Title = "Noxware",
    Icon = "moon",
    Author = "by Static",
    Folder = "Noxware",
})

local MainTab = Window:Tab({
    Title = "Main",
    Icon = "house",
})

local KillAuraSection = MainTab:Section({ 
    Title = "Kill Aura",
    TextXAlignment = "Left",
})

local KillAuraToggle = MainTab:Toggle({
    Title = "Enable Kill Aura",
    Icon = "sword",
    Default = false,
    Callback = function(state)
        KillAura = state
    end
})

local KillAuraDistanceSlider = MainTab:Slider({
    Title = "Slider",
    
    -- To make float number supported, 
    -- make the Step a float number.
    -- example: Step = 0.1
    Step = 1,
    
    Value = {
        Min = 0,
        Max = 500,
        Default = 50,
    },
    Callback = function(value)
        KillAuraDistance = value
    end
})

hum.Died:Connect(function()
	char = plr.Character or plr.CharacterAdded:Wait()
	hum = char:WaitForChild("Humanoid")
	hrp = char:WaitForChild("HumanoidRootPart")
end)
