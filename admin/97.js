export default {
    "": {
        "chainId": 97,
        "explorer": "https://testnet.bscscan.com/"
    },
    "daofactory": {
        "address": "0x2Fa625CDf857F39F9708A00f69eF5fbb483f861D",
        "interface": [
            "event DAOBlacklisted(uint256 id)",
            "event DAOCreated(uint256 id, tuple(bytes32 infoHash, address proxyAdmin, address governor, uint8 standard, bool isRetired, bool isBlacklisted) dao)",
            "event DAORetired(uint256 id)",
            "event DAOUpdated(uint256 id, tuple(bytes32 infoHash, address proxyAdmin, address governor, uint8 standard, bool isRetired, bool isBlacklisted) updatedDao)",
            "event Initialized(uint8 version)",
            "event OwnerChanged(address prevOwner, address newOwner)",
            "event ProxyCreated(address proxy, address implementation)",
            "function blacklistDAO(uint256 _daoId)",
            "function changeOwner(address newOwner)",
            "function createDAO(address[] _admins, tuple(uint32 minVotingDelay, uint32 maxVotingDelay, uint32 minVotingPeriod, uint32 maxVotingPeriod, bool isWhitelistRequired) _baseConfig, tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval) _governorConfig, tuple(uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod) _timelockConfig, address _gToken, uint8 _standard, tuple(string name, string symbol, address owner, uint8 decimals, uint256 initialSupply) _initialization, bytes32 _infoHash) payable returns (uint256)",
            "function createProxy(address _implementation, address _admin, bytes _initializeData) payable returns (address proxy_)",
            "function createProxyAdmin(address _owner) returns (address admin_)",
            "function daos(uint256) view returns (bytes32 infoHash, address proxyAdmin, address governor, uint8 standard, bool isRetired, bool isBlacklisted)",
            "function daosInfo(uint256[] _ids) view returns (bytes32[3][] stores)",
            "function getDAOIds(bool blacklist) view returns (uint256[])",
            "function getTotalDAOs() view returns (uint256)",
            "function initialize(address _governorLogic, address _timelockLogic, address _gTokenFactory, address _owner)",
            "function isDAOBlacklisted(uint256 _daoId) view returns (bool)",
            "function isDAOExisted(uint256 _daoId) view returns (bool)",
            "function isDAORetired(uint256 _daoId) view returns (bool)",
            "function retireDAO(uint256 _daoId)",
            "function updateDAO(uint256 _daoId, tuple(bytes32 infoHash, address proxyAdmin, address governor, uint8 standard, bool isRetired, bool isBlacklisted) _updatedDAO)"
        ]
    },
    "proxyadmin": {
        "address": "0xD406c815c2295BB8eb59D3741f6bfB57bf524f8f",
        "interface": [
            "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
            "function changeProxyAdmin(address proxy, address newAdmin)",
            "function getProxyAdmin(address proxy) view returns (address)",
            "function getProxyImplementation(address proxy) view returns (address)",
            "function owner() view returns (address)",
            "function renounceOwnership()",
            "function transferOwnership(address newOwner)",
            "function upgrade(address proxy, address implementation)",
            "function upgradeAndCall(address proxy, address implementation, bytes data) payable"
        ]
    },
    "proxyfactory": {
        "address": "0x9e0c771f328Fc5E7E4496d3cf6DA6D7BDE60349d",
        "interface": [
            "event ProxyCreated(address proxy, address implementation)",
            "function createProxy(address _implementation, address _admin, bytes _initializeData) payable returns (address proxy_)",
            "function createProxyAdmin(address _owner) returns (address admin_)"
        ]
    },
    "governancetokenfactory": {
        "address": "0x0D2dD92521F779ca2eA8d3d7d209363C6E7b158A",
        "interface": [
            "function createToken(uint8 _standard, tuple(string name, string symbol, address owner, uint8 decimals, uint256 initialSupply) _initialization, address _owner) returns (address gToken_)"
        ]
    },
    "governor": {
        "address": "0x38f7B486E18456C1f085f44bE4c09187a94324c8",
        "interface": [
            "event AdminsUpdated(address[] admins)",
            "event EmergencyActions(address guardian, address timelock, tuple(address target, uint256 value, string signature, bytes data)[] actions, string description)",
            "event GovernorBaseConfigUpdated(tuple(uint32 minVotingDelay, uint32 maxVotingDelay, uint32 minVotingPeriod, uint32 maxVotingPeriod, bool isWhitelistRequired) oldConfig, tuple(uint32 minVotingDelay, uint32 maxVotingDelay, uint32 minVotingPeriod, uint32 maxVotingPeriod, bool isWhitelistRequired) newConfig)",
            "event GovernorConfigsUpdated(tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval)[] configs)",
            "event Initialized(uint8 version)",
            "event NewGuardianSet(address oldGuardian, address newGuardian)",
            "event ProposalCanceled(uint256 proposalId)",
            "event ProposalCreated(uint256 index, uint256 proposalId, address proposer, address timelock, tuple(address target, uint256 value, string signature, bytes data)[] actions, uint256 startBlock, uint256 endBlock, bytes32 descriptionHash)",
            "event ProposalExecuted(uint256 proposalId)",
            "event ProposalQueued(uint256 proposalId, uint256 eta)",
            "event TimelocksUpdated(address[] timelocks)",
            "event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)",
            "event WhitelistProposerExpirationSet(address account, uint256 expirtation)",
            "function BALLOT_TYPEHASH() view returns (bytes32)",
            "function DOMAIN_TYPEHASH() view returns (bytes32)",
            "function QUORUM_DENOMINATOR() view returns (uint256)",
            "function addAdmin(address _admin)",
            "function addConfig(tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval) _config)",
            "function addTimelock(address _timelock)",
            "function admins(uint256) view returns (address)",
            "function baseConfig() view returns (uint32 minVotingDelay, uint32 maxVotingDelay, uint32 minVotingPeriod, uint32 maxVotingPeriod, bool isWhitelistRequired)",
            "function cancel(tuple(address target, uint256 value, string signature, bytes data)[] actions, bytes32 descriptionHash)",
            "function castVote(uint256 proposalId, uint8 support)",
            "function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s)",
            "function castVoteWithReason(uint256 proposalId, uint8 support, string reason)",
            "function configs(uint256) view returns (uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval)",
            "function emergencyCall(uint256 timelock, tuple(address target, uint256 value, string signature, bytes data)[] actions, string description) payable",
            "function execute(tuple(address target, uint256 value, string signature, bytes data)[] actions, bytes32 descriptionHash) payable",
            "function getConfigs() view returns (tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval)[])",
            "function getReceipt(uint256 proposalId, address voter) view returns (tuple(uint128 votes, uint32 timestamp, uint8 support, bool hasVoted))",
            "function getTimelocks() view returns (address[])",
            "function guardian() view returns (address)",
            "function hashProposal(tuple(address target, uint256 value, string signature, bytes data)[] actions, bytes32 descriptionHash) pure returns (uint256)",
            "function infoHash() view returns (bytes32)",
            "function initialize(address[] _admins, tuple(uint32 minVotingDelay, uint32 maxVotingDelay, uint32 minVotingPeriod, uint32 maxVotingPeriod, bool isWhitelistRequired) _baseConfig, tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval) _config, address _timelock, address _votes)",
            "function isWhitelistedProposer(address account) view returns (bool)",
            "function name() view returns (string)",
            "function proposalIds(uint256) view returns (uint256)",
            "function proposals(uint256) view returns (uint256 id, uint128 forVotes, uint128 againstVotes, uint128 abstainVotes, uint64 startBlock, uint32 duration, uint32 eta, address proposer, uint32 quorumAttendance, uint32 quorumApproval, bool canceled, bool executed, address timelock)",
            "function proposalsInfo(uint256[] _ids) view returns (bytes32[5][] stores)",
            "function propose(uint256 _timelock, uint256 _config, tuple(address target, uint256 value, string signature, bytes data)[] actions, bytes32 descriptionHash) returns (uint256)",
            "function queue(tuple(address target, uint256 value, string signature, bytes data)[] actions, bytes32 descriptionHash)",
            "function quorum(uint256 nominator, uint64 blockNumber) view returns (uint256)",
            "function removeAdmin(address _admin)",
            "function removeConfig(uint256 _index)",
            "function removeTimelock(address _timelock)",
            "function setGuardian(address newGuardian)",
            "function setWhitelistProposerExpiration(address account, uint256 expiration)",
            "function state(uint256 proposalId) view returns (uint8)",
            "function timelocks(uint256) view returns (address)",
            "function updateConfig(uint256 index, tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval) newConfig)",
            "function validateConfig(tuple(uint32 votingDelay, uint32 votingPeriod, uint32 quorumAttendance, uint32 quorumApproval) _config) view",
            "function version() view returns (string)",
            "function votes() view returns (address)",
            "function whitelistProposerExpirations(address) view returns (uint256)"
        ]
    },
    "timelock": {
        "address": "0x766CB0c261023FCa4B8989a8F7F36C2627D99a2f",
        "interface": [
            "event GovernorSet(address governor)",
            "event Initialized(uint8 version)",
            "event MasterTimelockSet(address master)",
            "event Migrated(address newTimelock)",
            "event TimelockConfigUpdated(tuple(uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod) oldConfig, tuple(uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod) newConfig)",
            "event TransactionCancelled(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
            "event TransactionExecuted(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
            "event TransactionQueued(bytes32 indexed txHash, address indexed target, uint256 value, string signature, bytes data, uint256 eta)",
            "function cancelTransaction(address _target, uint256 _value, string _signature, bytes _data, uint256 _eta)",
            "function config() view returns (uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod)",
            "function delay() view returns (uint32)",
            "function emergencyTransaction(address _target, uint256 _value, string _signature, bytes _data) payable returns (bytes)",
            "function executeTransaction(address _target, uint256 _value, string _signature, bytes _data, uint256 _eta) payable returns (bytes)",
            "function governor() view returns (address)",
            "function gracePeriod() view returns (uint32)",
            "function initialize(tuple(uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod) _config, address _governor, address _master)",
            "function isDeprecated() view returns (bool)",
            "function master() view returns (address)",
            "function queueTransaction(address _target, uint256 _value, string _signature, bytes _data, uint256 _eta) returns (bytes32)",
            "function queuedTransactions(bytes32) view returns (bool)",
            "function setGovernor(address _governor)",
            "function setMaster(address newMaster)",
            "function updateConfig(tuple(uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod) _config)",
            "function validateConfig(tuple(uint32 minTimelockDelay, uint32 maxTimelockDelay, uint32 delay, uint32 gracePeriod) _config) pure returns (bool)"
        ]
    },
    "erc20votes": {
        "address": "0x7e733c06A80fA01b2c6C2149f94997cbA7Df4fd8",
        "interface": [
            "constructor(tuple(string name, string symbol, address owner, uint8 decimals, uint256 initialSupply) _initialization)",
            "event Approval(address indexed owner, address indexed spender, uint256 value)",
            "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
            "event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)",
            "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
            "event Transfer(address indexed from, address indexed to, uint256 value)",
            "function DELEGATION_TYPEHASH() view returns (bytes32)",
            "function allowance(address owner, address spender) view returns (uint256)",
            "function approve(address spender, uint256 amount) returns (bool)",
            "function balanceOf(address account) view returns (uint256)",
            "function decimals() view returns (uint8)",
            "function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)",
            "function delegate(address delegatee)",
            "function delegates(address account) view returns (address)",
            "function getPastTotalSupply(uint256 blockNumber) view returns (uint256)",
            "function getPastVotes(address account, uint256 blockNumber) view returns (uint256)",
            "function getTotalSupply() view returns (uint256)",
            "function getVotes(address account) view returns (uint256)",
            "function increaseAllowance(address spender, uint256 addedValue) returns (bool)",
            "function mint(uint256 amount)",
            "function name() view returns (string)",
            "function owner() view returns (address)",
            "function renounceOwnership()",
            "function supportsInterface(bytes4 interfaceId) view returns (bool)",
            "function symbol() view returns (string)",
            "function totalSupply() view returns (uint256)",
            "function transfer(address to, uint256 amount) returns (bool)",
            "function transferFrom(address from, address to, uint256 amount) returns (bool)",
            "function transferOwnership(address newOwner)"
        ]
    },
    "erc721votes": {
        "address": "0x36058ebB50A11d09313DDD1A22688d1F7c0aFa68",
        "interface": [
            "constructor(tuple(string name, string symbol, address owner, uint8 decimals, uint256 initialSupply) _initialization)",
            "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
            "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
            "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
            "event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)",
            "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
            "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
            "function DELEGATION_TYPEHASH() view returns (bytes32)",
            "function approve(address to, uint256 tokenId)",
            "function balanceOf(address owner) view returns (uint256)",
            "function delegate(address delegatee)",
            "function delegates(address account) view returns (address)",
            "function getApproved(uint256 tokenId) view returns (address)",
            "function getPastTotalSupply(uint256 blockNumber) view returns (uint256)",
            "function getPastVotes(address account, uint256 blockNumber) view returns (uint256)",
            "function getTotalSupply() view returns (uint256)",
            "function getVotes(address account) view returns (uint256)",
            "function isApprovedForAll(address owner, address operator) view returns (bool)",
            "function mint(uint256 tokenId)",
            "function name() view returns (string)",
            "function owner() view returns (address)",
            "function ownerOf(uint256 tokenId) view returns (address)",
            "function renounceOwnership()",
            "function safeTransferFrom(address from, address to, uint256 tokenId)",
            "function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)",
            "function setApprovalForAll(address operator, bool approved)",
            "function supportsInterface(bytes4 interfaceId) view returns (bool)",
            "function symbol() view returns (string)",
            "function tokenURI(uint256 tokenId) view returns (string)",
            "function transferFrom(address from, address to, uint256 tokenId)",
            "function transferOwnership(address newOwner)"
        ]
    }
}